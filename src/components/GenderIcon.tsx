import { Block, Female, Male, QuestionMark } from "@mui/icons-material";
import { CharacterGender } from "../api";

export interface GenderIconProps {
  gender: CharacterGender;
  style?: React.CSSProperties;
}

export const GenderIcon = ({ gender, style: baseStyle }: GenderIconProps) => {
  const style = { ...baseStyle };

  switch (gender) {
    case CharacterGender.Genderless:
      return <Block style={style} />;
    case CharacterGender.Female:
      return <Female style={style} />;
    case CharacterGender.Male:
      return <Male style={style} />;
    default:
      return <QuestionMark style={style} />;
  }
};
