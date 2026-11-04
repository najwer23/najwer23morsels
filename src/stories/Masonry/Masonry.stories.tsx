import type { Meta, StoryObj } from '@storybook/react-vite';
import { Masonry } from '.';

const meta: Meta<typeof Masonry> = {
  title: 'grid/Masonry',
  component: Masonry,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A responsive Masonry layout component for React that arranges elements into columns based on their content height.

Supports dynamic content heights, configurable spacing, responsive column counts and load completion callbacks.

\`\`\`tsx
import { Masonry } from 'najwer23morsels/lib/Masonry';
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const columns = {
  mobile: 1,
  tablet: 2,
  smallDesktop: 3,
  desktop: 4,
};

const defaultGap = {
  col: '20px',
  row: '20px',
};

const wrapperStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '1400px',
  margin: '0 auto',
  padding: '30px',
  boxSizing: 'border-box',
};

const palette = ['#E0E7FF', '#FCE7F3', '#DCFCE7', '#FEF3C7', '#E0F2FE', '#F3E8FF'];

const cardStyle = (background: string): React.CSSProperties => ({
  background,
  borderRadius: '12px',
  padding: '20px',
  color: '#26272E',
  boxSizing: 'border-box',
  width: '100%',
});

const Card = ({
  title,
  description,
  background = '#F3F4F6',
  height,
}: {
  title: string;
  description: string;
  background?: string;
  height?: number;
}) => (
  <article
    style={{
      ...cardStyle(background),
      minHeight: height,
    }}
  >
    <h3 style={{ margin: '0 0 10px', fontSize: '18px' }}>{title}</h3>

    <p style={{ margin: 0, lineHeight: 1.6 }}>{description}</p>
  </article>
);

const defaultItems: React.ReactNode[] = [
  <Card
    key="1"
    title="Design"
    description="Creating consistent and accessible interfaces for modern applications."
    background={palette[0]}
  />,
  <Card
    key="2"
    title="Development"
    description="Building reusable components and scalable frontend architectures."
    background={palette[1]}
    height={260}
  />,
  <Card
    key="3"
    title="React"
    description="Component composition, hooks, state management and performance optimization."
    background={palette[2]}
  />,
  <Card
    key="4"
    title="TypeScript"
    description="Strongly typed applications with maintainable and predictable code."
    background={palette[3]}
    height={220}
  />,
  <Card
    key="5"
    title="Accessibility"
    description="Making interfaces usable for everyone through semantic HTML, keyboard navigation and WCAG guidelines."
    background={palette[4]}
    height={300}
  />,
  <Card
    key="6"
    title="Responsive Design"
    description="Layouts that adapt naturally to different screen sizes."
    background={palette[5]}
  />,
  <Card
    key="7"
    title="Performance"
    description="Optimizing rendering, loading and user experience."
    background={palette[0]}
    height={240}
  />,
  <Card
    key="8"
    title="Architecture"
    description="Organizing code into reusable and independent modules."
    background={palette[1]}
  />,
  <Card
    key="9"
    title="Testing"
    description="Reliable applications through automated tests and continuous integration."
    background={palette[2]}
    height={280}
  />,
  <Card
    key="10"
    title="Documentation"
    description="Clear documentation helps teams collaborate and maintain software."
    background={palette[3]}
  />,
  <Card
    key="11"
    title="User Experience"
    description="Designing intuitive interactions and meaningful user journeys."
    background={palette[4]}
    height={200}
  />,
  <Card
    key="12"
    title="Quality"
    description="Consistent code reviews, standards and maintainability."
    background={palette[5]}
  />,
];

const galleryItems: React.ReactNode[] = [
  { height: 260, title: 'Architecture', background: '#DCE7F5' },
  { height: 180, title: 'Workspace', background: '#F3DFD5' },
  { height: 320, title: 'Creative Studio', background: '#E4DDF5' },
  { height: 210, title: 'Minimal Design', background: '#DDEBDD' },
  { height: 300, title: 'Interior', background: '#F3E9D2' },
  { height: 190, title: 'Typography', background: '#E5E5E5' },
  { height: 240, title: 'Development', background: '#D9EAF0' },
  { height: 340, title: 'Photography', background: '#F0DCE5' },
  { height: 200, title: 'Inspiration', background: '#E7E3D8' },
  { height: 280, title: 'Creative Work', background: '#DCE1F4' },
].map((item, index) => (
  <article
    key={item.title}
    style={{
      height: item.height,
      background: item.background,
      borderRadius: '14px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '20px',
      boxSizing: 'border-box',
      color: '#26272E',
    }}
  >
    <span style={{ fontSize: '12px', opacity: 0.6 }}>PROJECT {String(index + 1).padStart(2, '0')}</span>

    <h3 style={{ margin: 0, fontSize: '22px' }}>{item.title}</h3>
  </article>
));

const renderMasonry = (items: React.ReactNode[]) => (
  <div style={wrapperStyle}>
    <Masonry
      gap={defaultGap}
      col={columns}
      delay={10}
      onGridMasonryLoadEnd={(loaded) => {
        console.log('Masonry loaded:', loaded);
      }}
    >
      {items}
    </Masonry>
  </div>
);

export const Default: Story = {
  args: {
    children: defaultItems,
    gap: defaultGap,
    col: columns,
    delay: 10,
  },
  render: (args) => (
    <div style={wrapperStyle}>
      <Masonry {...args} />
    </div>
  ),
};

export const Responsive: Story = {
  args: {
    children: defaultItems,
    gap: {
      col: '24px',
      row: '24px',
    },
    col: {
      mobile: 1,
      tablet: 2,
      smallDesktop: 3,
      desktop: 4,
    },
    delay: 10,
  },
  render: (args) => (
    <div style={wrapperStyle}>
      <Masonry {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Automatically adjusts the number of columns according to the viewport width.',
      },
    },
  },
};

export const PortfolioGallery: Story = {
  args: {
    children: galleryItems,
    gap: {
      col: '16px',
      row: '16px',
    },
    col: {
      mobile: 1,
      tablet: 2,
      smallDesktop: 3,
      desktop: 4,
    },
  },
  render: (args) => (
    <div style={wrapperStyle}>
      <Masonry {...args} />
    </div>
  ),
};

export const Compact: Story = {
  args: {
    children: defaultItems,
    gap: {
      col: '10px',
      row: '10px',
    },
    col: {
      mobile: 2,
      tablet: 3,
      smallDesktop: 4,
      desktop: 5,
    },
    delay: 0,
  },
  render: (args) => (
    <div style={wrapperStyle}>
      <Masonry {...args} />
    </div>
  ),
};

export const CustomStyling: Story = {
  args: {
    children: defaultItems,
    gap: {
      col: '32px',
      row: '32px',
    },
    col: {
      mobile: 1,
      tablet: 2,
      smallDesktop: 2,
      desktop: 3,
    },
    style: {
      padding: '20px',
      background: '#F5F5F5',
      borderRadius: '16px',
    },
  },
  render: (args) => (
    <div style={wrapperStyle}>
      <Masonry {...args} />
    </div>
  ),
};
