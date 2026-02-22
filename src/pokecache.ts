export type CacheEntry<T> = {
    createdat: number;
    val: T;
};

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;


    constructor (number:number) {
        this.#interval = number;
        this.#startReaping();
    };

    add<T>(key:string, val: T){
        this.#cache.set(key, {
            createdat: Date.now(),
            val: val,
        });
    };

    get<T>(Key:string): T | undefined  {
        return this.#cache.get(Key)?.val ?? undefined;
    };

    #reap(){
        const newertime = Date.now() - this.#interval;

        for(const [key, entry] of this.#cache) {
            if(entry.createdat < newertime) {
                this.#cache.delete(key);
            }
        }
    }

    #startReaping(){
        this.#reapIntervalId =
         setInterval(() => {
            this.#reap();
         }, this.#interval);
    };

    stopReapLoop() {
        clearInterval(this.#reapIntervalId);
    }
}