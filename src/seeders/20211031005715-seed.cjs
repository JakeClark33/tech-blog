"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      { username: "john", passwordHash: "$2b$12$wm8Dorzgjk1OXwe2G1vt0uagpi3G7fElAxRtt9Vv01OrnFnJgrQma" },
      { username: "dan", passwordHash: "$2b$12$wm8Dorzgjk1OXwe2G1vt0uagpi3G7fElAxRtt9Vv01OrnFnJgrQma" },
      { username: "shelly", passwordHash: "$2b$12$wm8Dorzgjk1OXwe2G1vt0uagpi3G7fElAxRtt9Vv01OrnFnJgrQma" },
    ], {});

    const users = await queryInterface.sequelize.query(
      `SELECT id from Users;`
    );

    const userRows = users[0];

    await queryInterface.bulkInsert("Posts", [
      {
        title: 'Malesuada Aenean Pellentesque',
        slug: 'malesuada-aenean-pellentesque',
        imageSeed: 'malesuada',
        content: '<p>Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.<br><br>Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis.</p>',
        description: 'Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget...',
        userId: userRows[0].id
      },
      {
        title: 'Dolor Tristique',
        slug: 'dolor-tristique',
        imageSeed: 'dolor',
        content: '<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.<br><br>Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.<br><br>Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>',
        description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis...',
        userId: userRows[1].id
      },
      {
        title: 'Condimentum Vulputate Justo Fringilla',
        slug: 'condimentum-vulputate-justo-fringilla',
        imageSeed: 'condimentum',
        content: '<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.<br><br>Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum.<br><br>Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>',
        description: 'Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tor...',
        userId: userRows[2].id
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
