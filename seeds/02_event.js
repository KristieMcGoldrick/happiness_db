var find = require('../helper.js');


exports.seed = function(knex, Promise) {

      return Promise.all([
        knex('account').select(),
        knex('event').select()
      ]).then(function (result) {
        var account= result[0];
        var event = result[1];
        return Promise.all([
          knex('event').insert({
            date: 'July 22, 2016',
            rating: '1',
            description: 'I was anxious, stressed and sad. But then I felt happiness later in the day.',
            account_id: find.findFromList('kristie', account, 'name')
          }),
          knex('event').insert({
            date: 'July 4, 2016',
            rating: '3',
            description: 'I was tired from the long wedding weekend, but happy and excited for a week off. Plus we were headed to Vail in a few days.',
            account_id: find.findFromList('kristie', account, 'name')
          }),
          knex('event').insert({
            date: 'July 1, 2016',
            rating: '4',
            description: 'I spent the day exploring Zurich with my coworkers. We saw a concery and had the best time.',
            account_id: find.findFromList('meeshy', account, 'name')
          }),
          knex('event').insert({
            date: 'June 1, 2016',
            rating: '3',
            description: 'I had just landed in Switzerland, and was embarking on my new journey. I was super excited, but tired from the travel as well. I was also a bit nervous for the unknow.',
            account_id: find.findFromList('meeshy', account, 'name')
          }),
          knex('event').insert({
            date: 'May 15, 2016',
            rating: '5',
            description: 'I was so happy and relaxed. Brandon and I went to Milk and Honey, Rioja, and Union Station to kick off the warm weekend.',
            account_id: find.findFromList('kristie', account, 'name')
          })
        ]);
      })
};
