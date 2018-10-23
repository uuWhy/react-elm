const prefix = '__elm__';

/* 本地数据存储和读取 */
export default class StorageUtils {

    static get(key) {
        let ret = window.localStorage.getItem(prefix+key);
        if(ret){
            return JSON.parse(ret);
        }
        return null;
    }

    static
}