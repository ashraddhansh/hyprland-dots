#!/bin/zsh

# Get the current active workspace using hyprctl and clean up any extra spaces or parentheses
active_workspace=$(hyprctl monitors | grep "active workspace" | awk '{print $3}' | tr -d '()')

# Prompt the user for the new workspace name
echo "Current active workspace: $active_workspace"
echo "Enter the new workspace name: "
read workspace_name

# Rename the workspace using hyprctl command
hyprctl dispatch renameworkspace $active_workspace "$workspace_name"

