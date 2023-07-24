import IconComponent from "../../atoms/Icon";
import { LableComponent } from "../../atoms/Label";
import { ToolbarComponent } from "../../molecules/Toolbar";
import { CardComponent } from "../../organism/Card";
import { ContentAndSidebarComponent } from "../../templates/ContentAndSidebar";
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonComponent from "../../atoms/Button";

type DefaultPageProps = {

}

export const DefaultPage: React.FC<DefaultPageProps> = (props) => {
  const card = <CardComponent  maxWidth={350} text="This is card" />;
  const icon = <IconComponent icon={<DeleteIcon /> } />
  const name = <ButtonComponent text='React Demo' varient='text' color='secondary'/>;

  return (
    <div>
      <ToolbarComponent icon={icon} name={name}/>
      {/* <CardComponent  maxWidth={350} text="This is card" /> */}
      <ContentAndSidebarComponent sidebar={<LableComponent text='This is sidebar' variant={'h5'} />} main={card}/>
    </div>
  );
}