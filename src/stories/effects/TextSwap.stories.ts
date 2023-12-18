import type { Meta, StoryObj } from '@storybook/react';
import TextSwap from "./TextSwap.tsx";


const meta = {
    title: 'Effects/TextSwap',
    component: TextSwap,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        text: { control: {
            type: 'array',
                options: ['Hello', 'World'],
            } },
    },
} satisfies Meta<typeof TextSwap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: ['Hello', 'World']
    },
};

