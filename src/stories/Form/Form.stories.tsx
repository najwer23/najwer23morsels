import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useRef, useState } from 'react';
import { action } from 'storybook/actions';
import { Button } from '../Button';
import { Calendar } from '../Calendar';
import { Input } from '../Input';
import { Select } from '../Select';
import { TextBox } from '../TextBox';
import { Form, FormType } from '.';

const meta: Meta<typeof Form> = {
  title: 'Form/Form',
  component: Form,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Form component handles submission with validation support. On submit it triggers validation on every field, then passes each field's \`value\` and \`error\` to \`onSubmit\`.

It also renders its own feedback below the fields: \`errorMsg\` when \`isError\`, a loading indicator when \`isPending\`, and \`successMsg\` when \`isSuccess\`.

Field \`name\` values are used as element ids, so each story uses its own prefix to keep them unique on the docs page.

\`\`\`tsx
import { Form } from 'najwer23morsels/lib/form';
\`\`\`
      `,
      },
    },
  },
  tags: ['autodocs'],
  args: {
    onSubmit: action('submit'),
    isError: false,
    isPending: false,
    isSuccess: false,
    errorMsg: undefined,
    successMsg: undefined,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

/* ---------- helpers ---------- */

const hasErrors = (form: FormType) => Object.values(form).some(({ error }) => error);

/** Simulates an async submit and drives the form states. */
const useFakeSubmit = (delay = 800) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const onSubmit = (form: FormType) => {
    setIsSuccess(false);
    setIsError(false);
    setIsPending(true);

    timer.current = setTimeout(() => {
      setIsPending(false);
      action('Form:')(form);

      if (hasErrors(form)) {
        action('Form has errors')();
        setIsError(true);
        return;
      }

      action('Form submitted')();
      setIsSuccess(true);
    }, delay);
  };

  return { isSuccess, isError, isPending, onSubmit };
};

const SubmitButton: React.FC<{ label?: string }> = ({ label = 'Submit' }) => (
  <Button type="submit" variant="primary" height="40px" width="100%">
    <TextBox mobileSize={16} desktopSize={16} color="inherit">
      {label}
    </TextBox>
  </Button>
);

/* ---------- interactive stories ---------- */

export const Default: Story = {
  args: { errorMsg: 'Form has errors', successMsg: 'Form submitted' },
  render: function Render(args) {
    const submit = useFakeSubmit(500);

    return (
      <Form {...args} {...submit}>
        <Input
          label="Email"
          type="text"
          name="defaultEmail"
          validatorOptions={[{ type: 'empty' }, { type: 'email' }]}
        />
        <Input label="Password" type="password" name="defaultPass" validatorOptions={[{ type: 'empty' }]} />
        <Select
          options={[
            { value: '1', label: 'Test1' },
            { value: '2', label: 'Test2' },
          ]}
          label="Select"
          name="defaultSelect"
          validatorOptions={[{ type: 'empty' }]}
        />
        <Calendar name="defaultCalendar" label="Calendar" initialValue="2020-03-03" />
        <Input kind="textarea" label="Message" type="text" name="defaultMsg" validatorOptions={[{ type: 'empty' }]} />
        <SubmitButton />
      </Form>
    );
  },
};

export const Login: Story = {
  parameters: {
    docs: { description: { story: 'A minimal login form. Submit with empty fields to see validation.' } },
  },
  args: { errorMsg: 'Check your email and password', successMsg: 'Logged in' },
  render: function Render(args) {
    const submit = useFakeSubmit();

    return (
      <Form {...args} {...submit}>
        <Input
          label="Email"
          type="email"
          name="loginEmail"
          autoComplete="email"
          validatorOptions={[{ type: 'empty' }, { type: 'email' }]}
        />
        <Input
          label="Password"
          type="password"
          name="loginPassword"
          autoComplete="current-password"
          validatorOptions={[{ type: 'empty' }]}
        />
        <SubmitButton label="Log in" />
      </Form>
    );
  },
};

export const Contact: Story = {
  parameters: {
    docs: { description: { story: 'Text fields, a select and a textarea.' } },
  },
  args: { errorMsg: 'Please fill in all fields', successMsg: 'Message sent' },
  render: function Render(args) {
    const submit = useFakeSubmit();

    return (
      <Form {...args} {...submit}>
        <Input label="Name" type="text" name="contactName" validatorOptions={[{ type: 'empty' }]} />
        <Input
          label="Email"
          type="email"
          name="contactEmail"
          validatorOptions={[{ type: 'empty' }, { type: 'email' }]}
        />
        <Select
          options={[
            { value: 'support', label: 'Support' },
            { value: 'sales', label: 'Sales' },
            { value: 'other', label: 'Other' },
          ]}
          label="Topic"
          name="contactTopic"
          validatorOptions={[{ type: 'empty' }]}
        />
        <Input kind="textarea" label="Message" type="text" name="contactMsg" validatorOptions={[{ type: 'empty' }]} />
        <SubmitButton label="Send message" />
      </Form>
    );
  },
};

export const Booking: Story = {
  parameters: {
    docs: { description: { story: 'A form with a Calendar field.' } },
  },
  args: { errorMsg: 'Please choose a valid date', successMsg: 'Booked' },
  render: function Render(args) {
    const submit = useFakeSubmit();

    return (
      <Form {...args} {...submit}>
        <Input label="Full name" type="text" name="bookingName" validatorOptions={[{ type: 'empty' }]} />
        <Calendar name="bookingDate" label="Date" initialValue="2026-11-04" />
        <SubmitButton label="Book" />
      </Form>
    );
  },
};

export const WithCancel: Story = {
  parameters: {
    docs: { description: { story: 'Two actions: `secondary` for the safe action, `primary` for submit.' } },
  },
  args: { errorMsg: 'Form has errors', successMsg: 'Saved' },
  render: function Render(args) {
    const submit = useFakeSubmit();

    return (
      <Form {...args} {...submit}>
        <Input label="Display name" type="text" name="cancelName" validatorOptions={[{ type: 'empty' }]} />
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button type="button" variant="secondary" height="40px" width="100%" onClick={action('cancel')}>
            <TextBox mobileSize={16} desktopSize={16} color="inherit">
              Cancel
            </TextBox>
          </Button>
          <SubmitButton label="Save" />
        </div>
      </Form>
    );
  },
};

/* ---------- static states (controlled from the Controls panel) ---------- */

export const PendingState: Story = {
  parameters: {
    docs: { description: { story: 'Static `isPending` state. `Form` shows its own loading indicator.' } },
  },
  args: { isPending: true },
  render: (args) => (
    <Form {...args}>
      <Input label="Email" type="email" name="pendingEmail" defaultValue="jane@example.com" />
      <SubmitButton />
    </Form>
  ),
};

export const SuccessState: Story = {
  parameters: {
    docs: { description: { story: 'Static `isSuccess` state.' } },
  },
  args: { isSuccess: true, successMsg: 'Form submitted' },
  render: (args) => (
    <Form {...args}>
      <Input label="Email" type="email" name="successEmail" defaultValue="jane@example.com" />
      <SubmitButton />
    </Form>
  ),
};

export const ErrorState: Story = {
  parameters: {
    docs: { description: { story: 'Static `isError` state.' } },
  },
  args: { isError: true, errorMsg: 'Form has errors' },
  render: (args) => (
    <Form {...args}>
      <Input label="Email" type="email" name="errorEmail" defaultValue="not-an-email" />
      <SubmitButton />
    </Form>
  ),
};
