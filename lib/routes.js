Router.route('/', {
    template: 'home',
    name: 'home',
    action: function() {
        //Make users create an avatar if they haven't yet
        if(Meteor.user().avatarUrl) {
            this.render();
        } else {
            this.redirect('/studio');
        }
    }
});
Router.route('/createGame');
Router.route('/register');
Router.route('/invite');
Router.route('/studio');
Router.route('/upload/:_id', {
    template: 'upload'
});
Router.route('/vote/:_id', {
    template: 'vote'
});

Router.route('/result');

//Package to add current route name as a class on the body
Router.onBeforeAction('bodyClass');
Router.route('/profile');