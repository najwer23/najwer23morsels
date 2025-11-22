import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { Button } from '../button';
import { Input } from '../input';
import { Form } from '.';
import { FormType } from './Form';

const meta: Meta<typeof Form> = {
  title: 'Form/Form',
  component: Form,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Form component provides a structured way to handle form submission with validation support. It utilizes controlled inputs and custom validation rules to manage user input efficiently.

\`\`\`tsx
import { Form } from 'najwer23morsels/lib/form';
\`\`\`
      `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: () => {},
    children: <></>,
  },
  render: (args) => {
    const handleOnSubmit = (form: FormType) => {
      action('Form:', form)(form);
      if (Object.values(form).some(({ error }) => error)) {
        action('Form has errors')();
        return;
      }
      action('Form submitted')();
    };

    return (
      <>
        <Form onSubmit={handleOnSubmit}>
          <Input label="Email" type="text" name="name" validatorOptions={[{ type: 'empty' }, { type: 'email' }]} />

          <Input label="Password" type="password" name="pass" validatorOptions={[{ type: 'empty' }]} />

          <Input kind="textarea" label="Msg" type="text" name="msg" validatorOptions={[{ type: 'empty' }]} />

          <Button type="submit" backgroundColor="yellow" borderColor="black" height="40px" padding={0} width="300px">
            Submit
          </Button>
        </Form>
      </>
    );
  },
};
