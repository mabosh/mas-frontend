import { ActivyTable } from "../../components/ActivtyTable";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";

import {Container} from './style';

export function Dashboard(){
    return(
        <>
            <Header />
            <Container>
                <Summary />
                <ActivyTable />
            </Container>
        </>
    )
}