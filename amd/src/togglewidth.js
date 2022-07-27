import * as Ajax from 'core/ajax';
export const init = () => {
    document.getElementById('usertogglewidth').addEventListener('click', toggleWidth);
};

const toggleWidth = () => {
    // Set a user pref and add a class to Page
    let el = document.getElementById("page");
    let isAlreadyFull = el.classList.contains('learnr-fullwidth');
    Ajax.call([{
        methodname: 'core_user_set_user_preferences',
        args: {
            'preferences': [{
                'name': 'theme_learnr_fullwidth',
                'userid': 2,
                'value': !isAlreadyFull
            }]
        },
        done: function () {
            if (isAlreadyFull) {
                el.classList.remove("learnr-fullwidth");
                el.classList.add("learnr-narrowwidth");
            } else {
                el.classList.add("learnr-fullwidth");
                el.classList.remove("learnr-narrowwidth");
            }
        }
    }]);
};