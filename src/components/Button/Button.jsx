import { StyledButton } from './Button.styles';

const Button = ({ text, onClick, color, variant, style }) => {
  return onClick ? (
    <StyledButton
      variant={variant}
      style={style}
      color={color}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  ) : (
    <StyledButton variant={variant} style={style} color={color}>
      {text}
    </StyledButton>
  );
};

export default Button;
