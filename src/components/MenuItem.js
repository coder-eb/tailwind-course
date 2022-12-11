function SubMenuItem({itemName}) {
    return (
        <div className="p-4 font-bold hover:bg-white/5 hover:text-zinc-200 transition-colors ease-in-out cursor-pointer text-pink-200">
            <span>{itemName}</span>
        </div>
    )
}

function SubMenu({items}) {
    if (items.length > 0) {
        const subMenu = items.map((item) =>
            <SubMenuItem itemName={item}/>
        );
        return (
            <div className="group-hover:block hidden absolute top-full right-0 whitespace-nowrap bg-pink-500 rounded-b-md text-right">
                {subMenu}
            </div>
        )
    }
    return (<></>)
}

function MenuItem({name, subMenuItems}) {
    
    return (
        <div className="group relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
            <span>{name}</span>
            <SubMenu items={subMenuItems}/>
        </div>
    );
}

export default MenuItem;