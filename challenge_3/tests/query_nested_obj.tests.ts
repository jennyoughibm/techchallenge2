
import QueryNestedObj from "../src/QueryNestedObj";

describe('Should be able to retrieve correct value', function(){
    it('get value for search key', function() {
        let object: string = '{"a":{"b":{"c":"d"}}}';
        let result = QueryNestedObj.GetKey(object, "c");

        expect(result).toBe('d');
    });
});
