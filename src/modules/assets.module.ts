const glob = import.meta.glob("../assets/pictures/**/!(*.css|*.scss|*.sass|*.less)", { eager: true });

/**
 * Функция для получения изображения
 * @param path - Путь
 * @returns - URL картинки или null
 */
export function getImage(path: string) {    
    return getAsset(`images/${path}`);
}

/**
 * Функция для получения ресурса (ассета)
 * @param path - Путь
 * @returns - URL ресурса или null
 */
export function getAsset(path: string) {
    const item: any = glob[`../assets/${path}`];
    if (!item) return null;

    return item.default;
}