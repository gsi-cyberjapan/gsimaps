/*
 * jQuery ah-placeholder plugin 1.2
 *
 * https://github.com/ahomu/jquery.ah-placeholder
 * http://havelog.ayumusato.com/develop/javascript/e189-jquery-plugin-placeholder.html
 *
 * Copyright (c) 2011 Ayumu Sato ( http://havelog.ayumusato.com )
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($) {

$.fn.ahPlaceholder = function(options)
{
    // property
    var defaults = {
            placeholderColor : 'silver',
            placeholderAttr  : 'title',
            likeApple        : false
        },
        settings = $.extend({}, defaults, options);

    var ngCode  = [
            ' ',  // --------------
            '0',  // ???
            '9',  // tab
            '16', // shift
            '17', // ctrl
            '32', // space
            '27', // esc
            '37', // left
            '38', // up
            '39', // right
            '40', // down
            '91', // Cmd(L), Win(L)
            '92', // Win(R)
            '93', // Cmd(R)
            '112',// F1
            '113',// F2
            '114',// F3
            '115',// F4
            '116',// F5
            '117',// F6
            '118',// F7
            '119',// F8
            '120',// F9
            '121',// F10
            '122',// F11
            '123',// F12
            ' '   // ---------------
        ].join('@'),
        keyCatch = (function(){
            if ( document.all ) {
                return function(e){return e.keyCode;};
            } else if ( document.getElementById ) {
                return function(e){return (e.keyCode)? e.keyCode: e.charCode;};
            } else if ( document.layers ) {
                return function(e){return e.which;};
            }
        })();

    // method
    var init    = function()
        {
            // placeholderが有効なら処理を必要としないので終了
            if ( settings.placeholderAttr === 'placeholder' && ('placeholder' in document.createElement('input')) ) {
                return;
            }

            $.data(this, 'placeholder-string', $(this).attr(settings.placeholderAttr));
            $.data(this, 'placeholder-color', $(this).css('color'));

            var phString    = $.data(this, 'placeholder-string'),
                self        = this,
                $self       = $(this);

            if ( self.value === '' ) {
                self.value = phString;
                $self.css('color', settings.placeholderColor);
            }

            if ( settings.likeApple === true ) {
                $self.bind('mousedown', moveCursorToHead);
                $self.bind('keydown', onKeydown);
                $self.bind('keyup', resetPlaceholder);
            } else {
                $self.bind('focus', onFocus);
                $self.bind('blur', resetPlaceholder);
            }

            $self.closest('form').submit(function() {
                if ( self.value === $.data(self, 'placeholder-string')
                     && $self.css('color') === $('<div/>').css('color', settings.placeholderColor).css('color')) {
                         self.value = '';
                }
                return true;
            });
        },
        onKeydown = function(e)
        {
            if ( this.value === $.data(this, 'placeholder-string') ) {
                var key = keyCatch(e);

                if ( ngCode.indexOf('@'+key+'@') !== -1 ) {
                    // tabの入力は認める
                    return ( key === 9 );
                } else {
                    _clearPlaceholder(this);
                }
            }
        },
        onFocus = function()
        {
            if ( this.value === $.data(this, 'placeholder-string') ) {
                _clearPlaceholder(this);
            }
        },
        resetPlaceholder = function(e)
        {
            if ( this.value === '' ) {
                _setPlaceholder(this);

                if ( e.type === 'keyup' ) {
                    moveCursorToHead.apply(this);
                }
            }
        },
        moveCursorToHead = function()
        {
            if ( this.value === $.data(this, 'placeholder-string') ) {
                $(this).focus();
                if ( this.createTextRange ) {
                    var range = this.createTextRange();
                    range.collapse();
                    range.moveEnd('character', 0);
                    range.moveStart('character', 0);
                    setTimeout(function() {
                        range.select();
                    }, 17);
                }
                else if ( this.setSelectionRange ) {
                    this.setSelectionRange(0, 0);
                }
                return false;
            }
        },
        _setPlaceholder = function(self)
        {
            self.value = $.data(self, 'placeholder-string');
            $(self).css('color', settings.placeholderColor);
        },
        _clearPlaceholder = function(self)
        {
            self.value = '';
            $(self).css('color', $.data(self, 'placeholder-color'));
        };
    // construct
    this.each(function()
    {
        init.apply(this);
    });

    return this;
};
})(jQuery);
