import './styles.css';

const typesOfButton = [
  'normal',
  'outlined',
  'text'
] as const;


type ButtonType = typeof typesOfButton[number]; // Extraemos el tipo de las claves
type ButtonTypeStyles = { [key in ButtonType]: string };

interface ButtonProps {
  children?: string;
  type?: ButtonType;
}


export function Button({ children = '', type = 'normal', }: ButtonProps) {

  const buttonStyle: ButtonTypeStyles = typesOfButton.reduce((acc, type): ButtonTypeStyles => {
    return { ...acc, [type]: `${type}-button` };
  }, {} as ButtonTypeStyles);

  console.log(buttonStyle[type])

  return <button className={buttonStyle[type]}>{children}</button>;
}
