import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '../button';
import { Grid } from '../grid';
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
    widthMax: '600px',
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

export const DialogButtonUnderText: Story = {
  args: {
    open: true,
    widthMax: '600px',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Grid layout="container" widthMax={'400px'}>
          <TextBox mobileSize={14} desktopSize={14} color="black" margin={'0 0 40px'}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </TextBox>

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
            <TextBox mobileSize={14} desktopSize={14} margin="0 30px 30px 30px">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </TextBox>
            <TextBox mobileSize={14} desktopSize={14} margin="0 30px 30px 30px">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </TextBox>
            <TextBox mobileSize={14} desktopSize={14} margin="0 30px 30px 30px">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </TextBox>
            <TextBox mobileSize={14} desktopSize={14} margin="0 30px 30px 30px">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </TextBox>
            <TextBox mobileSize={14} desktopSize={14} margin="0 30px 30px 30px">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </TextBox>
            <TextBox mobileSize={14} desktopSize={14} margin="0 30px 30px 30px">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </TextBox>
            <TextBox mobileSize={14} desktopSize={14} margin="0 30px 30px 30px">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </TextBox>
            <TextBox mobileSize={14} desktopSize={14} margin="0 30px 30px 30px">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </TextBox>
            <TextBox mobileSize={14} desktopSize={14} margin="0 30px 30px 30px">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </TextBox>
            <TextBox mobileSize={14} desktopSize={14} margin="0 30px 30px 30px">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </TextBox>
          </Dialog>
        </Grid>
      </>
    );
  },
};
