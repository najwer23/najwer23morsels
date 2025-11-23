import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { action } from 'storybook/actions';
import { Button } from '../button';
import { Input } from '../input';
import { TextBox } from '../textbox';
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
    const [isSuccess, setIsSucess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isPending, setIsPending] = useState(false);

    const handleOnSubmit = (form: FormType) => {
      setIsSucess(false);
      setIsError(false);
      setIsPending(true);

      setTimeout(() => {
        setIsPending(false);
        action('Form:', form)(form);
        if (Object.values(form).some(({ error }) => error)) {
          action('Form has errors')();

          setIsError(true);
          return;
        }
        action('Form submitted')();
        setIsSucess(true);
      }, 500);
    };

    return (
      <>
        <Form
          onSubmit={handleOnSubmit}
          isError={isError}
          isPending={isPending}
          isSuccess={isSuccess}
          errorMsg={'Form has errors'}
          successMsg={'Form submitted'}
        >
          {/* <Input label="Email" type="text" name="name" validatorOptions={[{ type: 'empty' }, { type: 'email' }]} /> */}

          <Input label="Password" type="password" name="pass" validatorOptions={[{ type: 'empty' }]} />

          <Input kind="textarea" label="Msg" type="text" name="msg" validatorOptions={[{ type: 'empty' }]} />

          <Button type="submit" backgroundColor="yellow" borderColor="black" height="40px" padding={0} width="300px">
            <TextBox mobileSize={18} desktopSize={18}>
              Submit
            </TextBox>
          </Button>
        </Form>
      </>
    );
  },
};
