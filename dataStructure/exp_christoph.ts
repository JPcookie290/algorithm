const myData: number[] = new Array(1, 5, 10);
myData.push(10);

const headExample = {
    value: 5,
    next: {
        value: 15,
        next: {
            value: 20,
            next: {
                value: 55,
                next: null
            },
        },
    },
};

headExample.next.next.next.value;