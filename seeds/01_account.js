
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
      return Promise.all([
        // Inserts seed entries
        knex('account').insert({
              name: 'kristie',
              username: 'kristlovesdogs',
              password: '$2a$04$fBLEkC1j4ZGXTzEQqeNESuIJOy.1Y43TxK0ZrXejc.Rw8VwFKuvHy'
        }),
        knex('account').insert({
              name: 'meeshy',
              username: 'meeshandpepper',
              password: '$2a$04$Oi0QK336TDY4abALrmN1fe9qTYMHMPoO0ZdPwbkzMlySG8uvbCHkS'
        })
    ]);
};
