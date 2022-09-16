import {BehaviorSubject} from "rxjs";
import {IMenu} from "@/common/layout/sider/menu";
import {XOR} from "ts-xor";
import useBehaviorSubject from "@/hooks/useBehaviorSubject";

type IMultipleMenu = {
    text: string;
    child: IMenu[]
}

export type MenuItem = XOR<IMenu, IMultipleMenu>;

const menuList$ = new BehaviorSubject<MenuItem[] | null>([])

export const useMenuList = () => {
    const menuList = useBehaviorSubject(menuList$);
    return menuList || []
}

export const loadMenuList = (list: MenuItem[]) => {
    menuList$.next(list)
}
