import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useRef, useState } from 'react';
import { action } from 'storybook/actions';
import { Button } from '../Button';
import { ButtonCopy } from '../ButtonCopy';
import { Input } from '../Input';
import { TextBox } from '../TextBox';
import { Dialog } from '.';

const LOREM = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`;

const meta: Meta<typeof Dialog> = {
  title: 'Dialog/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A modal dialog built with the native \`<dialog>\` element.

It is controlled with \`open\` and \`onCancel\`. \`onCancel\` runs for the Close button and for the Escape key, so it should set \`open\` to false.

\`\`\`tsx
import { Dialog } from 'najwer23morsels/lib/Dialog';
\`\`\`
      `,
      },
    },
  },
  tags: ['autodocs'],
  args: {
    open: false,
    widthMax: '600px',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/* ---------- helpers ---------- */

type ButtonVariant = React.ComponentProps<typeof Button>['variant'];

interface DialogDemoProps {
  triggerLabel: string;
  triggerVariant?: ButtonVariant;
  widthMax: string;
  children: (close: () => void) => React.ReactNode;
}

const DialogDemo: React.FC<DialogDemoProps> = ({ triggerLabel, triggerVariant = 'primary', widthMax, children }) => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <Button variant={triggerVariant} height="40px" padding="0 16px" onClick={() => setOpen(true)}>
        <TextBox mobileSize={14} desktopSize={14} color="inherit">
          {triggerLabel}
        </TextBox>
      </Button>

      <Dialog open={open} widthMax={widthMax} onCancel={close}>
        {children(close)}
      </Dialog>
    </>
  );
};

const Heading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <TextBox tag="h3" mobileSize={18} desktopSize={18} fontWeight={600} margin="0 30px 12px 30px">
    {children}
  </TextBox>
);

const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <TextBox mobileSize={14} desktopSize={14} margin="0 30px 24px 30px">
    {children}
  </TextBox>
);

const Actions: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', margin: '0 30px 30px 30px' }}>{children}</div>
);

const ActionButton: React.FC<{
  variant: ButtonVariant;
  label: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit';
}> = ({ variant, label, onClick, loading, disabled, type = 'button' }) => (
  <Button
    variant={variant}
    type={type}
    height="36px"
    padding="0 16px"
    onClick={onClick}
    loading={loading}
    disabled={disabled}
  >
    <TextBox mobileSize={14} desktopSize={14} color="inherit">
      {label}
    </TextBox>
  </Button>
);

/* ---------- stories ---------- */

export const Default: Story = {
  render: () => (
    <DialogDemo triggerLabel="Open dialog" widthMax="600px">
      {() => (
        <>
          <Heading>About this app</Heading>
          <Body>{LOREM}</Body>
        </>
      )}
    </DialogDemo>
  ),
};

export const ConfirmDelete: Story = {
  parameters: {
    docs: {
      description: { story: 'Destructive confirmation. The safe action is `secondary`, the risky one is `danger`.' },
    },
  },
  render: () => (
    <DialogDemo triggerLabel="Delete account" triggerVariant="danger" widthMax="420px">
      {(close) => (
        <>
          <Heading>Delete account?</Heading>
          <Body>This will permanently remove your account and all its data. This action cannot be undone.</Body>
          <Actions>
            <ActionButton variant="secondary" label="Cancel" onClick={close} />
            <ActionButton
              variant="danger"
              label="Delete"
              onClick={() => {
                action('delete')();
                close();
              }}
            />
          </Actions>
        </>
      )}
    </DialogDemo>
  ),
};

export const Success: Story = {
  render: () => (
    <DialogDemo triggerLabel="Show success" triggerVariant="success" widthMax="380px">
      {(close) => (
        <>
          <Heading>Payment received</Heading>
          <Body>Thank you. A receipt has been sent to your email address.</Body>
          <Actions>
            <ActionButton variant="success" label="Done" onClick={close} />
          </Actions>
        </>
      )}
    </DialogDemo>
  ),
};

export const FormDialog: Story = {
  parameters: {
    docs: { description: { story: 'A form inside a dialog. Save is disabled until the name is filled in.' } },
  },
  render: () => {
    const Form: React.FC<{ close: () => void }> = ({ close }) => {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');

      return (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            action('submit')({ name, email });
            close();
          }}
        >
          <Heading>Invite a teammate</Heading>
          <div style={{ margin: '0 30px 16px 30px' }}>
            <Input
              label="Name"
              name="dialogInviteName"
              placeholder="Jane Doe"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              validatorOptions={[{ type: 'empty' }]}
            />
            <Input
              label="Email"
              name="dialogInviteEmail"
              type="email"
              placeholder="jane@example.com"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
          <Actions>
            <ActionButton variant="secondary" label="Cancel" onClick={close} />
            <ActionButton variant="primary" type="submit" label="Send invite" disabled={!name.trim()} />
          </Actions>
        </form>
      );
    };

    return (
      <DialogDemo triggerLabel="Invite" widthMax="460px">
        {(close) => <Form close={close} />}
      </DialogDemo>
    );
  },
};

export const SavingWithLoader: Story = {
  parameters: {
    docs: { description: { story: 'The Save button shows the loader for 2 seconds, then the dialog closes.' } },
  },
  render: () => {
    const Saving: React.FC<{ close: () => void }> = ({ close }) => {
      const [saving, setSaving] = useState(false);
      const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

      useEffect(
        () => () => {
          if (timer.current) clearTimeout(timer.current);
        },
        [],
      );

      return (
        <>
          <Heading>Unsaved changes</Heading>
          <Body>Save your changes before leaving this page.</Body>
          <Actions>
            <ActionButton variant="secondary" label="Discard" onClick={close} disabled={saving} />
            <ActionButton
              variant="primary"
              label="Save changes"
              loading={saving}
              onClick={() => {
                setSaving(true);
                timer.current = setTimeout(close, 2000);
              }}
            />
          </Actions>
        </>
      );
    };

    return (
      <DialogDemo triggerLabel="Leave page" widthMax="420px">
        {(close) => <Saving close={close} />}
      </DialogDemo>
    );
  },
};

export const ShareLink: Story = {
  parameters: {
    docs: { description: { story: 'Uses `ButtonCopy` inside a dialog.' } },
  },
  render: () => (
    <DialogDemo triggerLabel="Share" triggerVariant="menu" widthMax="480px">
      {() => (
        <>
          <Heading>Share this page</Heading>
          <Body>Anyone with the link can view it.</Body>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              margin: '0 30px 30px 30px',
              padding: '8px 8px 8px 12px',
              border: '1px solid #ccc',
              borderRadius: '12px',
            }}
          >
            <code style={{ fontSize: 13, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              https://example.com/share/abc123
            </code>
            <ButtonCopy textToCopy="https://example.com/share/abc123" height="32px" padding="0 12px" />
          </div>
        </>
      )}
    </DialogDemo>
  ),
};

export const LongScrollableContent: Story = {
  parameters: {
    docs: { description: { story: 'Content taller than the screen. The page behind the dialog does not scroll.' } },
  },
  render: () => (
    <DialogDemo triggerLabel="Terms of service" widthMax="600px">
      {() => (
        <>
          <Heading>Terms of service</Heading>
          {Array.from({ length: 12 }, (_, i) => (
            <Body key={i}>{LOREM}</Body>
          ))}
        </>
      )}
    </DialogDemo>
  ),
};

export const Narrow: Story = {
  render: () => (
    <DialogDemo triggerLabel="Narrow (320px)" widthMax="320px">
      {(close) => (
        <>
          <Heading>Heads up</Heading>
          <Body>A narrow dialog for short messages.</Body>
          <Actions>
            <ActionButton variant="primary" label="OK" onClick={close} />
          </Actions>
        </>
      )}
    </DialogDemo>
  ),
};

export const Wide: Story = {
  render: () => (
    <DialogDemo triggerLabel="Wide (900px)" widthMax="900px">
      {() => (
        <>
          <Heading>Release notes</Heading>
          <Body>{LOREM}</Body>
          <Body>{LOREM}</Body>
        </>
      )}
    </DialogDemo>
  ),
};
