// Dialog/Dialog.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useRef, useState } from 'react';
import { action } from 'storybook/actions';
import { Button } from '../Button';
import type { ButtonVariant as AllButtonVariants } from '../Button/Button.types';
import { Form as BalanceForm, type FormType } from '../Form';
import { Grid } from '../Grid';
import { Input } from '../Input';
import { TextBox } from '../TextBox';
import { Typography } from '../Typography';
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

Recommended content layout: a \`Grid\` container (\`padding="0px 30px 30px 30px"\`, \`margin="auto"\`) with a \`Typography\` subheading (\`appearance="light"\`, bottom margin 20px) above the content. All stories use this layout.

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

/** Variants usable without `textToCopy` */
type ButtonVariant = Exclude<AllButtonVariants, 'copy'>;

/** Shared dialog layout: same container, padding, margin and heading for every dialog. */
const DialogLayout: React.FC<{ title: string; widthMax: string; children: React.ReactNode }> = ({
  title,
  widthMax,
  children,
}) => (
  <Grid
    layout="container"
    widthMin={`min(calc(${widthMax} - 100px), calc(100vw - 25px))`}
    padding="0px 30px 30px 30px"
    margin="auto"
  >
    <Typography appearance="light" variant="subheading" style={{ margin: '0 0 20px 0' }}>
      {title}
    </Typography>

    {children}
  </Grid>
);

interface DialogDemoProps {
  triggerLabel: string;
  triggerVariant?: ButtonVariant;
  title: string;
  widthMax: string;
  children: (close: () => void) => React.ReactNode;
}

const DialogDemo: React.FC<DialogDemoProps> = ({
  triggerLabel,
  triggerVariant = 'primary',
  title,
  widthMax,
  children,
}) => {
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
        <DialogLayout title={title} widthMax={widthMax}>
          {children(close)}
        </DialogLayout>
      </Dialog>
    </>
  );
};

const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <TextBox mobileSize={14} desktopSize={14} margin="0 0 20px 0">
    {children}
  </TextBox>
);

const Actions: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', margin: '20px 0 0 0' }}>{children}</div>
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
    <DialogDemo triggerLabel="Open dialog" title="About this app" widthMax="600px">
      {() => <Body>{LOREM}</Body>}
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
    <DialogDemo triggerLabel="Delete account" triggerVariant="danger" title="Delete account?" widthMax="420px">
      {(close) => (
        <>
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
    <DialogDemo triggerLabel="Show success" triggerVariant="success" title="Payment received" widthMax="380px">
      {(close) => (
        <>
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
          <Actions>
            <ActionButton variant="secondary" label="Cancel" onClick={close} />
            <ActionButton variant="primary" type="submit" label="Send invite" disabled={!name.trim()} />
          </Actions>
        </form>
      );
    };

    return (
      <DialogDemo triggerLabel="Invite" title="Invite a teammate" widthMax="460px">
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
      <DialogDemo triggerLabel="Leave page" title="Unsaved changes" widthMax="420px">
        {(close) => <Saving close={close} />}
      </DialogDemo>
    );
  },
};

export const ShareLink: Story = {
  parameters: {
    docs: { description: { story: 'Uses the `copy` button variant inside a dialog.' } },
  },
  render: () => (
    <DialogDemo triggerLabel="Share" triggerVariant="menu" title="Share this page" widthMax="480px">
      {() => (
        <>
          <Body>Anyone with the link can view it.</Body>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              padding: '8px 8px 8px 12px',
              border: '1px solid #ccc',
              borderRadius: '12px',
            }}
          >
            <code style={{ fontSize: 13, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              https://example.com/share/abc123
            </code>
            <Button variant="copy" textToCopy="https://example.com/share/abc123" height="32px" padding="0 12px">
              <TextBox mobileSize={14} desktopSize={14} fontWeight={600} color="inherit">
                Copy
              </TextBox>
            </Button>
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
    <DialogDemo triggerLabel="Terms of service" title="Terms of service" widthMax="600px">
      {() => (
        <>
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
    <DialogDemo triggerLabel="Narrow (320px)" title="Heads up" widthMax="320px">
      {(close) => (
        <>
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
    <DialogDemo triggerLabel="Wide (900px)" title="Release notes" widthMax="900px">
      {() => (
        <>
          <Body>{LOREM}</Body>
          <Body>{LOREM}</Body>
        </>
      )}
    </DialogDemo>
  ),
};

/* ---------- real-world pattern ---------- */

type FakeResponse = { code: 'OK'; message: string };

/** Stand-in for `queryBalanceAdd`: succeeds after 1s, fails above 1000 credits. */
const fakeBalanceAdd = (values: Record<string, unknown>) =>
  new Promise<FakeResponse>((resolve, reject) => {
    setTimeout(() => {
      if (Number(values.credits) > 1000) reject(new Error('Limit is 1000 credits per operation'));
      else resolve({ code: 'OK', message: 'Credits added successfully' });
    }, 1000);
  });

const BalanceAddDemo: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState<FakeResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    },
    [],
  );

  const reset = () => {
    setData(null);
    setError(null);
  };

  const handleSubmit = async (form: FormType) => {
    if (Object.values(form).some(({ error }) => error)) return;
    const dataForm = Object.fromEntries(Object.entries(form).map(([key, { value }]) => [key, value]));

    setIsPending(true);
    reset();

    try {
      const response = await fakeBalanceAdd(dataForm);
      action('submit')(dataForm);
      setData(response);
    } catch (e) {
      setError(e as Error);
    } finally {
      setIsPending(false);
      setFormKey((prev) => prev + 1);
    }
  };

  const handleCancel = () => {
    setOpen(false);
    // wait for the closing animation before clearing the state
    resetTimer.current = setTimeout(reset, 300);
  };

  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        <TextBox mobileSize={16} desktopSize={16} color="inherit">
          Change Credits
        </TextBox>
      </Button>

      <Dialog widthMax="900px" open={open} onCancel={handleCancel}>
        <DialogLayout title="Add Credits" widthMax="900px">
          <BalanceForm
            key={formKey}
            onSubmit={handleSubmit}
            isError={!!error}
            isPending={isPending}
            isSuccess={data?.code === 'OK'}
            errorMsg={error?.message}
            successMsg={data?.message}
          >
            <Grid layout="columns" col={{ smallDesktop: 2 }} gap={{ col: '20px', row: '0px' }}>
              <Input
                label="Credits"
                name="credits"
                type="number"
                step={0.01}
                placeholder="Credits"
                validatorOptions={[{ type: 'decimalDigits', options: { digits: 2 } }]}
              />

              <Input
                label="Bank Account Number"
                name="bankAccountNumber"
                type="text"
                placeholder="Bank Account Number"
              />
            </Grid>

            <Grid
              layout="flex"
              widthMax="100%"
              padding="0"
              justifyContent="flex-end"
              alignItems="right"
              margin="20px 0 0 0"
            >
              <Button type="submit" variant="primary">
                <TextBox desktopSize={16} mobileSize={16} color="inherit">
                  Save changes
                </TextBox>
              </Button>
            </Grid>
          </BalanceForm>
        </DialogLayout>
      </Dialog>
    </>
  );
};

export const BalanceAddForm: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Real-world pattern: `Dialog` with `Grid`, `Typography` and `Form`. The fake request takes 1s and fails above 1000 credits. The form is remounted via `key` after each submit, and state is reset 300ms after closing.',
      },
    },
  },
  render: () => <BalanceAddDemo />,
};
