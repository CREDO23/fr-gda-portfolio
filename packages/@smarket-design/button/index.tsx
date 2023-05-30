import { Button as Btn, ConfigProvider } from "antd";
import { BtnProps } from "..";

export default function Button(props: BtnProps): JSX.Element {
  const {
    disabled = false,
    ghost = false,
    title,
    loading = false,
    danger = false,
    shape = "default",
    htmlType,
    size = "middle",
    block = false,
    type = "default",
    icon,
    onClick,
  } = props;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ff5722",
          colorError: "#FE4D4F",
        },
      }}
    >
      <Btn
        className="flex items-center justify-center "
        style={
          type === "primary" && !ghost ? { background: "#ff5722" } : undefined
        }
        type={type}
        size={size}
        block={block}
        icon={icon}
        onClick={onClick}
        ghost={ghost}
        disabled={disabled}
        loading={loading}
        danger={danger}
        shape={shape}
        htmlType={htmlType}
      >
        {title}
      </Btn>
    </ConfigProvider>
  );
}
