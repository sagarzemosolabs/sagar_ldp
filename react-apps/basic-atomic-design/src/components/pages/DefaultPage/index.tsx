import { LableComponent } from "../../atoms/Label";
import { ToolbarComponent } from "../../molecules/Toolbar";
import { CardComponent } from "../../organism/Card";
import { ContentAndSidebarComponent } from "../../templates/ContentAndSidebar";

type DefaultPageProps = {

}

export const DefaultPage: React.FC<DefaultPageProps> = (props) => {
  const card = <CardComponent  maxWidth={350} text="This is card" />;
  return (
    <div>
      <ToolbarComponent />
      {/* <CardComponent  maxWidth={350} text="This is card" /> */}
      <ContentAndSidebarComponent sidebar={<LableComponent text='This is sidebar' variant={'h5'} />} main={card}/>
    </div>
  );
}