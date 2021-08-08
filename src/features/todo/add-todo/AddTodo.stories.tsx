import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AddTodo from "./AddTodo";

export default {
  title: "AddTodo",
  component: AddTodo
} as ComponentMeta<typeof AddTodo>;

const Template: ComponentStory<typeof AddTodo> = () => <AddTodo />;

export const Default = Template.bind({});
Default.args = {};
