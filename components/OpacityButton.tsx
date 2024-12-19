import {
  GestureResponderEvent,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { PropsWithChildren } from "react";

interface OpacityButtonProps extends TouchableOpacityProps {
  onPress?: (event: GestureResponderEvent) => void;
}
export function OpacityButton({
  children,
  onPress,
  ...props
}: PropsWithChildren<OpacityButtonProps>) {
  return (
    <TouchableOpacity onPress={onPress} {...props}>
      {children}
    </TouchableOpacity>
  );
}
