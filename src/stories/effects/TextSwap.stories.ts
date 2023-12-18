import type {Meta, StoryObj} from '@storybook/react';
import TextSwap from "./TextSwap.tsx";
import {textSwapData} from "../../data";

const meta = {
    title: 'Effects/TextSwap',
    component: TextSwap,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        textArray: {
            control: {
                type: 'array',
                options: textSwapData
            }
        },
    },
} satisfies Meta<typeof TextSwap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        textArray: textSwapData,

    },
};

