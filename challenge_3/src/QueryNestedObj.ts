export default class query_nested_obj {
    static GetKey(obj: string, target: string): string {
        let i: number = 0;

        let jsonobj = JSON.parse(obj);
        if (jsonobj !== 'undefined') {

            for (const [key , value ] of Object.entries(jsonobj)) {
                if (key === target) {
                    // @ts-ignore
                    return value;
                } else {
                    i = i + 1;
                    // @ts-ignore
                    return this.GetKey(value, target);
                }
            }
        }

        return "not found"
    }
}

