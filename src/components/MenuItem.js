function MenuItem({name}) {
    return (
        <div class="relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out">
            <span>{name}</span>
        </div>
    );
}

export default MenuItem;