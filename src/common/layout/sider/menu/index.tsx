import "./index.less";
import {FC, ReactNode} from "react";
import {Link} from "react-router-dom"

export interface IMenu{
    icon?: ReactNode;
    text: string;
    url: string;
    currentUrl?: string
}

const MenuCustomize:FC<IMenu> = ({icon,text, url, currentUrl}) => {
    const el = <div className={`comp-menu${currentUrl === url ? ' active': ''}`}>
        {icon}{text}
    </div>;
    if(currentUrl === url){
        return <div>
            {el}
        </div>
    }
    return <Link to={url}>
        {el}
    </Link>
}

export default MenuCustomize;
