import Text from "../../assets/icons/text"
import people from "../../assets/icons/people.png"
import { Content, ContentImg, ContentText, Img } from "./styled"
// import { Container2 } from "../../assets/style/global"


export const Banner = () => {

    return (
            <Content>
                <ContentText>
                    <Text />
                </ContentText>
                <ContentImg>
                    <Img src={people} alt="homem segurando um notebook" />
                </ContentImg>
            </Content>
    )
} 