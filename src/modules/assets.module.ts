const glob = import.meta.glob("../assets/pictures/**/!(*.css|*.scss|*.sass|*.less)", { eager: true });

export function getImage(path: string) {    
    return getAsset(`images/${path}`);
}

export function getAsset(path: string) {
    const item: any = glob[`../assets/${path}`];
    if (!item) return null;

    return item.default;
}