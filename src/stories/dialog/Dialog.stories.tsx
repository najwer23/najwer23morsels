import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '../button';
import { TextBox } from '../textbox';
import { Dialog } from '.';

const meta: Meta<typeof Dialog> = {
  title: 'Dialog/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A modal dialog component built with the native \`<dialog>\` element.

It supports controlled open/close behavior, custom content, and a cancel callback.

\`\`\`tsx
import { Dialog } from 'najwer23morsels/lib/dialog';
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
    open: true,
    maxWidth: '600px',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <div>
          <Button height={'40px'} width={'100px'} backgroundColor="orangered" onClick={() => setIsOpen(true)}>
            <TextBox mobileSize={14} desktopSize={14} color="white">
              Open Dialog
            </TextBox>
          </Button>
          <Dialog {...args} open={isOpen} onCancel={() => setIsOpen(false)}>
            <TextBox mobileSize={14} desktopSize={14} margin="0 30px 30px 30px">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </TextBox>
          </Dialog>
        </div>
      </>
    );
  },
};
