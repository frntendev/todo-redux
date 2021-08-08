import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TodoItem from "./TodoItem";

export default {
  title: "TodoItem",
  component: TodoItem
} as ComponentMeta<typeof TodoItem>;

const Template: ComponentStory<typeof TodoItem> = args => (
  <TodoItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Test Todo",
  isDone: false
};

export const Done = Template.bind({});
Done.args = {
  title: "Test Todo",
  isDone: true
};
