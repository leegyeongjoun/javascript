/**
 * 관련 강의 영상: https://youtu.be/36HrZHzPeuY
 */
/**
 * Optional Chaining (ES11)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 */
 {
    const person1 = {
        name: 'Ellie',
        job: {
            title: 'S/W Engineer',
            manager: {
                name: 'Bob',
            },
        },
    };
    const person2 = {
        name: 'Bob',
    };
  
    // 💩💩💩💩💩💩
    {
        function printManager(person) {
            console.log(person.job.manager.name);
        }
        printManager(person1);                  // Bob
        // printManager(person2);
    }
  
    // 💩💩💩
    {
        function printManager(person) {
            console.log(
                person.job
                    ? person.job.manager
                    ? person.job.manager.name
                    : undefined
                    : undefined
            );
        }
        printManager(person1);                  // Bob
        printManager(person2);                  // undefined
    }
  
    // 💩
    {
        function printManager(person) {
            console.log(person.job && person.job.manager && person.job.manager.name);
        }
        printManager(person1);                  // Bob
        printManager(person2);                  // undefined
    }
  
    // ✨
    {
        function printManager(person) {
            console.log(person.job?.manager?.name);
        }
        printManager(person1);                  // Bob
        printManager(person2);                  // undefined
    }
    console.clear();
}
  
/**
 * Nullish Coalescing Operator (ES11)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
 */
{
    // Logical OR operator
    // false: false, '', 0, null, undefined
    {
        const name = 'Ellie';
        const userName = name || 'Guest';
        console.log(userName);                  // Ellie
    }
  
    {
        const name = null;
        const userName = name || 'Guest';
        console.log(userName);                  // Guest
    }
  
    // 💩
    {
        const name = '';
        const userName = name || 'Guest';
        console.log(userName);                  // Guest
  
        const num = 0;
        const message = num || 'undefined';
        console.log(message);                   // undefined
    }
  
    // ✨
    {
        const name = '';
        const userName = name ?? 'Guest';
        console.log(userName);                  // ''
  
        const num = 0;
        const message = num ?? 'undefined';
        console.log(message);                   // 0
    }
}
