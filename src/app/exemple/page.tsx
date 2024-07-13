
import style from './exemple.module.css'
import type { Metadata } from "next"; 
import Text from './components/Text/Text';

export const metadata: Metadata = {
  title: "About", 
};

export default function About(){
    return (
        <div className={style.red}>
            <Text />
        </div>
    )
}