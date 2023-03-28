/**
 * js.libに配置されているjqueryのプラグインを拡張する。
 *  */

/************************************************************************
 jquery.simple-color-picker.js
 ************************************************************************/

 $.fn.simpleColorPicker = function(options) {

	var defaults = {

		colorsPerLine: 8,

		colors: ['#000000', '#444444', '#666666', '#999999', '#cccccc', '#eeeeee', '#f3f3f3', '#ffffff'

				, '#ff0000', '#ff9900', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#9900ff', '#ff00ff'

				, '#f4cccc', '#fce5cd', '#fff2cc', '#d9ead3', '#d0e0e3', '#cfe2f3', '#d9d2e9', '#ead1dc'

				, '#ea9999', '#f9cb9c', '#ffe599', '#b6d7a8', '#a2c4c9', '#9fc5e8', '#b4a7d6', '#d5a6bd'

				, '#e06666', '#f6b26b', '#ffd966', '#93c47d', '#76a5af', '#6fa8dc', '#8e7cc3', '#c27ba0'

				, '#cc0000', '#e69138', '#f1c232', '#6aa84f', '#45818e', '#3d85c6', '#674ea7', '#a64d79'

				, '#990000', '#b45f06', '#bf9000', '#38761d', '#134f5c', '#0b5394', '#351c75', '#741b47'

				, '#660000', '#783f04', '#7f6000', '#274e13', '#0c343d', '#073763', '#20124d', '#4C1130'],

		showEffect: '',

		hideEffect: '',

		onChangeColor: false

	};

	var opts = $.extend(defaults, options);


	return this.each(function() {

		var txt = $(this);

		var colorsMarkup = '';

		var prefix = txt.attr('id').replace(/-/g, '') + '_';

		for(var i = 0; i < opts.colors.length; i++){

			var item = opts.colors[i];

			var breakLine = '';

			if (i % opts.colorsPerLine == 0)

				breakLine = 'clear: both; ';

//			if (i > 0 && breakLine && $.browser && $.browser.msie && $.browser.version <= 7) {
			if (i > 0 && breakLine && navigator.userAgent.match(/msie [6.]/i)) {

				breakLine = '';

				colorsMarkup += '<li style="float: none; clear: both; overflow: hidden; background-color: #fff; display: block; height: 1px; line-height: 1px; font-size: 1px; margin-bottom: -2px;"></li>';

			}

			colorsMarkup += '<li id="' + prefix + 'color-' + i + '" class="color-box" style="' + breakLine + 'background-color: ' + item + '" title="' + item + '"></li>';

		}

		var box = null;
		
		if ( opts.clearButton )
		{
			box = $('<div id="' + prefix + 'color-picker" class="color-picker" style="position: absolute; left: 0px; top: 0px;"><ul>' + colorsMarkup + '</ul><div style="clear: both;"></div><div  class="color-picker-clear-frame"><a href="javascript:void(0);">選択中の色をクリア</a></div></div>');
		}
		else
		{
			box = $('<div id="' + prefix + 'color-picker" class="color-picker" style="position: absolute; left: 0px; top: 0px;"><ul>' + colorsMarkup + '</ul><div style="clear: both;"></div></div>');
		}
		
		$('body').append(box);

		box.hide();
		
		box.find("div.color-picker-clear-frame a").on('click',function() {
			if (txt.is('input')) {

				txt.val("");

				txt.trigger('blur');

			}

//			if ($.isFunction(defaults.onChangeColor)) {
			if (defaults.onChangeColor && (typeof defaults.onChangeColor === 'function')) {

				defaults.onChangeColor.call(txt, "");

			}

			hideBox(box);
		} );

		box.find('li.color-box').on('click',function() {

			if (txt.is('input')) {

				txt.val(opts.colors[this.id.substr(this.id.indexOf('-') + 1)]);
				
				txt.trigger('blur');

			}

//			if ($.isFunction(defaults.onChangeColor)) {
			if (defaults.onChangeColor && (typeof defaults.onChangeColor === 'function')) {

				defaults.onChangeColor.call(txt, opts.colors[this.id.substr(this.id.indexOf('-') + 1)]);

			}

			hideBox(box);

		});

		$('body').on('click', function() {

			hideBox(box);

		});

		box.on('click',function(event) {

			event.stopPropagation();

		});

		var positionAndShowBox = function(box) {

			var screenSize = GSI.Utils.getScreenSize();
			var pos = txt.offset();

			var left = pos.left + txt.outerWidth() - box.outerWidth();
		
			//if (left < pos.left) left = pos.left;

			var top = (pos.top + txt.outerHeight() + 1);
			if ( top + 300 > screenSize.h ) {
				
				box.css({ left: left, top: "auto", "bottom" : screenSize.h - pos.top });
			} else {
				box.css({ left: left, top: top, "bottom": "auto" });
			}
			showBox(box);

		}

		txt.on('click',function(event) {

			event.stopPropagation();

			if (!txt.is('input')) {

				// element is not an input so probably a link or div which requires the color box to be shown

				positionAndShowBox(box);

			}

		});

		txt.on('focus',(function() {

			positionAndShowBox(box);

		}));

		function hideBox(box) {

			if (opts.hideEffect == 'fade')

				box.fadeOut();

			else if (opts.hideEffect == 'slide')

				box.slideUp();

			else

				box.hide();

		}

		function showBox(box) {

			if (opts.showEffect == 'fade')

				box.fadeIn();

			else if (opts.showEffect == 'slide')

				box.slideDown();

			else

				box.show();

		}

	});

};

/************************************************************************
 jquery.mjs.nestedSortable.js
 ************************************************************************/
 (function($) {
	if (!$.mjs || !$.mjs.nestedSortable) return;

	$.widget("mjs.nestedSortable", $.mjs.nestedSortable, {
		
		_mouseDrag: function(event) {
			var i,
				item,
				itemElement,
				intersection,
				self = this,
				o = this.options,
				scrolled = false,
				$document = $(document),
				previousTopOffset,
				parentItem,
				level,
				childLevels,
				itemAfter,
				itemBefore,
				newList,
				method,
				a,
				previousItem,
				nextItem,
				helperIsNotSibling;

			//Compute the helpers position
			this.position = this._generatePosition(event);
			this.positionAbs = this._convertPositionTo("absolute");

			if (!this.lastPositionAbs) {
				this.lastPositionAbs = this.positionAbs;
			}

			//Do scrolling
			if (this.options.scroll) {
				if (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {

					if (
						(
							this.overflowOffset.top +
							this.scrollParent[0].offsetHeight
						) -
						event.pageY <
						o.scrollSensitivity
					) {
						scrolled = this.scrollParent.scrollTop() + o.scrollSpeed;
						this.scrollParent.scrollTop(scrolled);
					} else if (
						event.pageY -
						this.overflowOffset.top <
						o.scrollSensitivity
					) {
						scrolled = this.scrollParent.scrollTop() - o.scrollSpeed;
						this.scrollParent.scrollTop(scrolled);
					}

					if (
						(
							this.overflowOffset.left +
							this.scrollParent[0].offsetWidth
						) -
						event.pageX <
						o.scrollSensitivity
					) {
						scrolled = this.scrollParent.scrollLeft() + o.scrollSpeed;
						this.scrollParent.scrollLeft(scrolled);
					} else if (
						event.pageX -
						this.overflowOffset.left <
						o.scrollSensitivity
					) {
						scrolled = this.scrollParent.scrollLeft() - o.scrollSpeed;
						this.scrollParent.scrollLeft(scrolled);
					}

				} else {

					if (
						event.pageY -
						$document.scrollTop() <
						o.scrollSensitivity
					) {
						scrolled = $document.scrollTop() - o.scrollSpeed;
						$document.scrollTop(scrolled);
					} else if (
						$(window).height() -
						(
							event.pageY -
							$document.scrollTop()
						) <
						o.scrollSensitivity
					) {
						scrolled = $document.scrollTop() + o.scrollSpeed;
						$document.scrollTop(scrolled);
					}

					if (
						event.pageX -
						$document.scrollLeft() <
						o.scrollSensitivity
					) {
						scrolled = $document.scrollLeft() - o.scrollSpeed;
						$document.scrollLeft(scrolled);
					} else if (
						$(window).width() -
						(
							event.pageX -
							$document.scrollLeft()
						) <
						o.scrollSensitivity
					) {
						scrolled = $document.scrollLeft() + o.scrollSpeed;
						$document.scrollLeft(scrolled);
					}

				}

				if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
					$.ui.ddmanager.prepareOffsets(this, event);
				}
			}

			//Regenerate the absolute position used for position checks
			this.positionAbs = this._convertPositionTo("absolute");

			// mjs - find the top offset before rearrangement,
			previousTopOffset = this.placeholder.offset().top;

			//Set the helper position
			if (!this.options.axis || this.options.axis !== "y") {
				this.helper[0].style.left = this.position.left + "px";
			}
			if (!this.options.axis || this.options.axis !== "x") {
				this.helper[0].style.top = (this.position.top) + "px";
			}

			// mjs - check and reset hovering state at each cycle
			this.hovering = this.hovering ? this.hovering : null;
			this.mouseentered = this.mouseentered ? this.mouseentered : false;

			// mjs - let's start caching some variables
			(function() {
				var _parentItem = this.placeholder.parent().parent();
				if (_parentItem && _parentItem.closest(".ui-sortable").length) {
					parentItem = _parentItem;
				}
			}.call(this));

			level = this._getLevel(this.placeholder);
			childLevels = this._getChildLevels(this.helper);
			newList = document.createElement(o.listType);

  		        // dragDirection object is required by jquery.ui.sortable.js 1.13+
		       	this.dragDirection = {
			      	vertical: this._getDragVerticalDirection(),
				horizontal: this._getDragHorizontalDirection()
		    	};
			
			//Rearrange
			for (i = this.items.length - 1; i >= 0; i--) {

				//Cache variables and intersection, continue if no intersection
				item = this.items[i];
				itemElement = item.item[0];
				intersection = this._intersectsWithPointer(item);
				if (!intersection) {
					continue;
				}

				// Only put the placeholder inside the current Container, skip all
				// items form other containers. This works because when moving
				// an item from one container to another the
				// currentContainer is switched before the placeholder is moved.
				//
				// Without this moving items in "sub-sortables" can cause the placeholder to jitter
				// beetween the outer and inner container.
				if (item.instance !== this.currentContainer) {
					continue;
				}

				// No action if intersected item is disabled
				// and the element above or below in the direction we're going is also disabled
				if (itemElement.className.indexOf(o.disabledClass) !== -1) {
					// Note: intersection hardcoded direction values from
					// jquery.ui.sortable.js:_intersectsWithPointer
					if (intersection === 2) {
						// Going down
						itemAfter = this.items[i + 1];
						if (itemAfter && itemAfter.item.hasClass(o.disabledClass)) {
							continue;
						}

					} else if (intersection === 1) {
						// Going up
						itemBefore = this.items[i - 1];
						if (itemBefore && itemBefore.item.hasClass(o.disabledClass)) {
							continue;
						}
					}
				}

				method = intersection === 1 ? "next" : "prev";

				// cannot intersect with itself
				// no useless actions that have been done before
				// no action if the item moved is the parent of the item checked
				if (itemElement !== this.currentItem[0] &&
					this.placeholder[method]()[0] !== itemElement &&
					!$.contains(this.placeholder[0], itemElement) &&
					(
						this.options.type === "semi-dynamic" ?
							!$.contains(this.element[0], itemElement) :
							true
					)
				) {

					// mjs - we are intersecting an element:
					// trigger the mouseenter event and store this state
					if (!this.mouseentered) {
						$(itemElement).trigger('mouseenter');
						this.mouseentered = true;
					}

					// mjs - if the element has children and they are hidden,
					// show them after a delay (CSS responsible)
					if (o.isTree && $(itemElement).hasClass(o.collapsedClass) && o.expandOnHover) {
						if (!this.hovering) {
							$(itemElement).addClass(o.hoveringClass);
							this.hovering = window.setTimeout(function() {
								$(itemElement)
									.removeClass(o.collapsedClass)
									.addClass(o.expandedClass);

								self.refreshPositions();
								self._trigger("expand", event, [self._uiHash(), itemElement]);
							}, o.expandOnHover);
						}
					}

					this.direction = intersection === 1 ? "down" : "up";

					// mjs - rearrange the elements and reset timeouts and hovering state
					if (this.options.tolerance === "pointer" || this._intersectsWithSides(item)) {
						$(itemElement).trigger('mouseleave');
						this.mouseentered = false;
						$(itemElement).removeClass(o.hoveringClass);
						if (this.hovering) {
							window.clearTimeout(this.hovering);
						}
						this.hovering = null;

						// mjs - do not switch container if
						// it's a root item and 'protectRoot' is true
						// or if it's not a root item but we are trying to make it root
						if (o.protectRoot &&
							!(
								this.currentItem[0].parentNode === this.element[0] &&
								// it's a root item
								itemElement.parentNode !== this.element[0]
								// it's intersecting a non-root item
							)
						) {
							if (this.currentItem[0].parentNode !== this.element[0] &&
								itemElement.parentNode === this.element[0]
							) {

								if ( !$(itemElement).children(o.listType).length) {
									itemElement.appendChild(newList);
									if (o.isTree) {
										$(itemElement)
											.removeClass(o.leafClass)
											.addClass(o.branchClass + " " + o.expandedClass);
									}
								}

								if (this.direction === "down") {
									a = $(itemElement).prev().children(o.listType);
								} else {
									a = $(itemElement).children(o.listType);
								}

								if (a[0] !== undefined) {
									this._rearrange(event, null, a);
								}

							} else {
								this._rearrange(event, item);
							}
						} else if (!o.protectRoot) {
							this._rearrange(event, item);
						}
					} else {
						break;
					}

					// Clear emtpy ul's/ol's
					this._clearEmpty(itemElement);

					this._trigger("change", event, this._uiHash());
					break;
				}
			}

			// mjs - to find the previous sibling in the list,
			// keep backtracking until we hit a valid list item.
			(function() {
				var _previousItem = this.placeholder.prev();
				if (_previousItem.length) {
					previousItem = _previousItem;
				} else {
					previousItem = null;
				}
			}.call(this));

			if (previousItem != null) {
				while (
					previousItem[0].nodeName.toLowerCase() !== "li" ||
					previousItem[0].className.indexOf(o.disabledClass) !== -1 ||
					previousItem[0] === this.currentItem[0] ||
					previousItem[0] === this.helper[0]
				) {
					if (previousItem[0].previousSibling) {
						previousItem = $(previousItem[0].previousSibling);
					} else {
						previousItem = null;
						break;
					}
				}
			}

			// mjs - to find the next sibling in the list,
			// keep stepping forward until we hit a valid list item.
			(function() {
				var _nextItem = this.placeholder.next();
				if (_nextItem.length) {
					nextItem = _nextItem;
				} else {
					nextItem = null;
				}
			}.call(this));

			if (nextItem != null) {
				while (
					nextItem[0].nodeName.toLowerCase() !== "li" ||
					nextItem[0].className.indexOf(o.disabledClass) !== -1 ||
					nextItem[0] === this.currentItem[0] ||
					nextItem[0] === this.helper[0]
				) {
					if (nextItem[0].nextSibling) {
						nextItem = $(nextItem[0].nextSibling);
					} else {
						nextItem = null;
						break;
					}
				}
			}

			this.beyondMaxLevels = 0;

			// mjs - if the item is moved to the left, send it one level up
			// but only if it's at the bottom of the list
			if (parentItem != null &&
				nextItem == null &&
				!(o.protectRoot && parentItem[0].parentNode == this.element[0]) &&
				(
					o.rtl &&
					(
						this.positionAbs.left +
						this.helper.outerWidth() > parentItem.offset().left +
						parentItem.outerWidth()
					) ||
					!o.rtl && (this.positionAbs.left < parentItem.offset().left)
				)
			) {

				parentItem.after(this.placeholder[0]);
				helperIsNotSibling = !parentItem
											.children(o.listItem)
											.children("li:visible:not(.ui-sortable-helper)")
											.length;
				if (o.isTree && helperIsNotSibling) {
					parentItem
						.removeClass(this.options.branchClass + " " + this.options.expandedClass)
						.addClass(this.options.leafClass);
				}
                if(typeof parentItem !== 'undefined')
				    this._clearEmpty(parentItem[0]);
				this._trigger("change", event, this._uiHash());
				// mjs - if the item is below a sibling and is moved to the right,
				// make it a child of that sibling
			} else if (previousItem != null &&
				!previousItem.hasClass(o.disableNestingClass) &&
				(
					previousItem.children(o.listType).length &&
					previousItem.children(o.listType).is(":visible") ||
					!previousItem.children(o.listType).length
				) &&
				!(o.protectRoot && this.currentItem[0].parentNode === this.element[0]) &&
				(
					o.rtl &&
					(
						this.positionAbs.left +
						this.helper.outerWidth() <
						previousItem.offset().left +
						previousItem.outerWidth() -
						o.tabSize
					) ||
					!o.rtl &&
					(this.positionAbs.left > previousItem.offset().left + o.tabSize)
				)
			) {

				this._isAllowed(previousItem, level, level + childLevels + 1);

				if (!previousItem.children(o.listType).length) {
					previousItem[0].appendChild(newList);
					if (o.isTree) {
						previousItem
							.removeClass(o.leafClass)
							.addClass(o.branchClass + " " + o.expandedClass);
					}
				}

				// mjs - if this item is being moved from the top, add it to the top of the list.
				if (previousTopOffset && (previousTopOffset <= previousItem.offset().top)) {
					previousItem.children(o.listType).prepend(this.placeholder);
				} else {
					// mjs - otherwise, add it to the bottom of the list.
					previousItem.children(o.listType)[0].appendChild(this.placeholder[0]);
				}
                if(typeof parentItem !== 'undefined')
				    this._clearEmpty(parentItem[0]);
				this._trigger("change", event, this._uiHash());
			} else {
				this._isAllowed(parentItem, level, level + childLevels);
			}

			//Post events to containers
			this._contactContainers(event);

			//Interconnect with droppables
			if ($.ui.ddmanager) {
				$.ui.ddmanager.drag(this, event);
			}

			//Call callbacks
			this._trigger("sort", event, this._uiHash());

			this.lastPositionAbs = this.positionAbs;
			return false;

		},

		_mouseStop: function(event) {
			// mjs - if the item is in a position not allowed, send it back
			if (this.beyondMaxLevels) {

				this.placeholder.removeClass(this.options.errorClass);

				if (this.domPosition.prev) {
					$(this.domPosition.prev).after(this.placeholder);
				} else {
					$(this.domPosition.parent).prepend(this.placeholder);
				}

				this._trigger("revert", event, this._uiHash());

			}

			// mjs - clear the hovering timeout, just to be sure
			$("." + this.options.hoveringClass)
				.trigger('mouseleave')
				.removeClass(this.options.hoveringClass);

			this.mouseentered = false;
			if (this.hovering) {
				window.clearTimeout(this.hovering);
			}
			this.hovering = null;

			this._relocate_event = event;
			this._pid_current = $(this.domPosition.parent).parent().attr("id");
			this._sort_current = this.domPosition.prev ? $(this.domPosition.prev).next().index() : 0;
			$.ui.sortable.prototype._mouseStop.apply(this, arguments); //asybnchronous execution, @see _clear for the relocate event.
		},


	});

 })(jQuery);

/************************************************************************
 jquery.alerts.js
 ************************************************************************/
 (function($) {

	if (!$.alerts) return;

	$.alerts._show = function(title, msg, value, type, callback) {
		
		$.alerts._hide();
		$.alerts._overlay('show');
		
		$("BODY").append(
		  '<div id="popup_container">' +
		    '<h1 id="popup_title"></h1>' +
		    '<div id="popup_content">' +
		      '<div id="popup_message"></div>' +
			'</div>' +
		  '</div>');
		
		if( $.alerts.dialogClass ) $("#popup_container").addClass($.alerts.dialogClass);
		
		// IE6 Fix
		// var pos = ($.browser.msie && parseInt($.browser.version) <= 6 ) ? 'absolute' : 'fixed'; 
		var pos = (navigator.userAgent.match(/msie [6.]/i)) ? 'absolute' : 'fixed';
		
		$("#popup_container").css({
			position: pos,
			zIndex: 99999,
			padding: 0,
			margin: 0
		});
		
		$("#popup_title").text(title);
		$("#popup_content").addClass(type);
		$("#popup_message").text(msg);
		$("#popup_message").html( $("#popup_message").text().replace(/\n/g, '<br />') );
		
		$("#popup_container").css({
			minWidth: $("#popup_container").outerWidth(),
			maxWidth: $("#popup_container").outerWidth()
		});
		
		$.alerts._reposition();
		$.alerts._maintainPosition(true);
		
		switch( type ) {
			case 'alert':
				$("#popup_message").after('<div id="popup_panel"><input type="button" value="' + $.alerts.okButton + '" id="popup_ok" /></div>');
				$("#popup_ok").on('click', function() {
					$.alerts._hide();
					callback(true);
				});
				$("#popup_ok").trigger('focus').on('keypress', function(e) {
					if( e.keyCode == 13 || e.keyCode == 27 ) $("#popup_ok").trigger('click');
				});
			break;
			case 'confirm':
				$("#popup_message").after('<div id="popup_panel"><input type="button" value="' + $.alerts.okButton + '" id="popup_ok" /> <input type="button" value="' + $.alerts.cancelButton + '" id="popup_cancel" /></div>');
				$("#popup_ok").on('click', function() {
					$.alerts._hide();
					if( callback ) callback(true);
				});
				$("#popup_cancel").on('click', function() {
					$.alerts._hide();
					if( callback ) callback(false);
				});
				$("#popup_ok").trigger('focus');
				$("#popup_ok, #popup_cancel").on('keypress', function(e) {
					if( e.keyCode == 13 ) $("#popup_ok").trigger('click');
					if( e.keyCode == 27 ) $("#popup_cancel").trigger('click');
				});
			break;
			case 'prompt':
				$("#popup_message").append('<br /><input type="text" size="30" id="popup_prompt" />').after('<div id="popup_panel"><input type="button" value="' + $.alerts.okButton + '" id="popup_ok" /> <input type="button" value="' + $.alerts.cancelButton + '" id="popup_cancel" /></div>');
				$("#popup_prompt").width( $("#popup_message").width() );
				$("#popup_ok").on('click', function() {
					var val = $("#popup_prompt").val();
					$.alerts._hide();
					if( callback ) callback( val );
				});
				$("#popup_cancel").on('click', function() {
					$.alerts._hide();
					if( callback ) callback( null );
				});
				$("#popup_prompt, #popup_ok, #popup_cancel").on('keypress', function(e) {
					if( e.keyCode == 13 ) $("#popup_ok").trigger('click');
					if( e.keyCode == 27 ) $("#popup_cancel").trigger('click');
				});
				if( value ) $("#popup_prompt").val(value);
				$("#popup_prompt").trigger('focus').trigger('select');
			break;
		}
		
		// Make draggable
		if( $.alerts.draggable ) {
			try {
				$("#popup_container").draggable({ handle: $("#popup_title") });
				$("#popup_title").css({ cursor: 'move' });
			} catch(e) { /* requires jQuery UI draggables */ }
		}
	
	}
		
	$.alerts._show2 = function(title, msg, value, type, width, callback) {
		
		$.alerts._hide();
		$.alerts._overlay('show');
		
		$("BODY").append(
		  '<div id="popup_container">' +
		    '<h1 id="popup_title"></h1>' +
		    '<div id="popup_content">' +
		      '<div id="popup_message"></div>' +
			'</div>' +
		  '</div>');
		
		if( $.alerts.dialogClass ) $("#popup_container").addClass($.alerts.dialogClass);
		
		// IE6 Fix
		// var pos = ($.browser.msie && parseInt($.browser.version) <= 6 ) ? 'absolute' : 'fixed'; 
		var pos = (navigator.userAgent.match(/msie [6.]/i)) ? 'absolute' : 'fixed';
		
		$("#popup_container").css({
			position: pos,
			zIndex: 99999,
			padding: 0,
			margin: 0
		});
		
		$("#popup_title").text(title);
		$("#popup_content").addClass(type);

		$("#popup_message").text(msg);
		$("#popup_message").html( $("#popup_message").text().replace(/\n/g, '<br />') );
		
		$("#popup_container").css({
			minWidth: $("#popup_container").outerWidth(),
			maxWidth: width
		});
		

		$.alerts._reposition();
		$.alerts._maintainPosition(true);
		
		switch( type ) {
			case 'alert':
				$("#popup_message").after('<div id="popup_panel"><input type="button" value="' + $.alerts.okButton + '" id="popup_ok" /></div>');
				$("#popup_ok").on('click', function() {
					$.alerts._hide();
					callback(true);
				});
				$("#popup_ok").trigger('focus').on('keypress', function(e) {
					if( e.keyCode == 13 || e.keyCode == 27 ) $("#popup_ok").trigger('click');
				});
			break;
			case 'confirm':
				$("#popup_message").after('<div id="popup_panel"><input type="button" value="' + $.alerts.okButton + '" id="popup_ok" /> <input type="button" value="' + $.alerts.cancelButton + '" id="popup_cancel" /></div>');
				$("#popup_ok").on('click', function() {
					$.alerts._hide();
					if( callback ) callback(true);
				});
				$("#popup_cancel").on('click', function() {
					$.alerts._hide();
					if( callback ) callback(false);
				});
				$("#popup_ok").trigger('focus');
				$("#popup_ok, #popup_cancel").on('keypress', function(e) {
					if( e.keyCode == 13 ) $("#popup_ok").trigger('click');
					if( e.keyCode == 27 ) $("#popup_cancel").trigger('click');
				});
			break;
			case 'prompt':
				$("#popup_message").append('<br /><input type="text" size="30" id="popup_prompt" />').after('<div id="popup_panel"><input type="button" value="' + $.alerts.okButton + '" id="popup_ok" /> <input type="button" value="' + $.alerts.cancelButton + '" id="popup_cancel" /></div>');
				$("#popup_prompt").width( $("#popup_message").width() );
				$("#popup_ok").on('click', function() {
					var val = $("#popup_prompt").val();
					$.alerts._hide();
					if( callback ) callback( val );
				});
				$("#popup_cancel").on('click', function() {
					$.alerts._hide();
					if( callback ) callback( null );
				});
				$("#popup_prompt, #popup_ok, #popup_cancel").on('keypress', function(e) {
					if( e.keyCode == 13 ) $("#popup_ok").trigger('click');
					if( e.keyCode == 27 ) $("#popup_cancel").trigger('click');
				});
				if( value ) $("#popup_prompt").val(value);
				$("#popup_prompt").trigger('focus').trigger('select');
			break;
		}
		
		// Make draggable
		if( $.alerts.draggable ) {
			try {
				$("#popup_container").draggable({ handle: $("#popup_title") });
				$("#popup_title").css({ cursor: 'move' });
			} catch(e) { /* requires jQuery UI draggables */ }
		}

	}

	$.alerts._maintainPosition = function(status) {
		if( $.alerts.repositionOnResize ) {
			switch(status) {
				case true:
					$(window).on('resize', $.alerts._reposition);
				break;
				case false:
					$(window).off('resize', $.alerts._reposition);
				break;
			}
		}
	}

	$.alerts._hide = function() {
		$("#popup_container").remove();
		$.alerts._overlay('hide');
		$.alerts._maintainPosition(false);
	}

})(jQuery);


/************************************************************************
 colorpicker/js/colorpicker.js
 ************************************************************************/
(function ($) {
	var ColorPicker = function () {
		var
			ids = {},
			inAction,
			charMin = 65,
			visible,
			tpl = '<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_clear">透明</div>' + 
			'<div class="colorpicker_cancel">キャンセル</div>' + '<div class="colorpicker_submit">決定</div></div>',
			defaults = {
				eventName: 'click',
				onShow: function () {},
				onBeforeShow: function(){},
				onHide: function () {},
				onChange: function () {},
				onSubmit: function () {},
				color: 'ff0000',
				livePreview: true,
				flat: false
			},
			fillRGBFields = function  (hsb, cal) {
				var rgb = HSBToRGB(hsb);
				$(cal).data('colorpicker').fields
					.eq(1).val(rgb.r).end()
					.eq(2).val(rgb.g).end()
					.eq(3).val(rgb.b).end();
			},
			fillRGBFieldsFromRGB = function  (rgb, cal) {
				$(cal).data('colorpicker').fields
					.eq(1).val(rgb.r).end()
					.eq(2).val(rgb.g).end()
					.eq(3).val(rgb.b).end();
			},
			fillHSBFields = function  (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(4).val(hsb.h).end()
					.eq(5).val(hsb.s).end()
					.eq(6).val(hsb.b).end();
			},
			fillHexFields = function (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(0).val(HSBToHex(hsb)).end();
			},
			
			fillHexFieldsFromRGB = function (rgb, cal) {
				$(cal).data('colorpicker').fields
					.eq(0).val(RGBToHex(rgb)).end();
			},
			setSelector = function (hsb, cal) {
				$(cal).data('colorpicker').selector.css('backgroundColor', '#' + HSBToHex({h: hsb.h, s: 100, b: 100}));
				$(cal).data('colorpicker').selectorIndic.css({
					left: parseInt(150 * hsb.s/100, 10),
					top: parseInt(150 * (100-hsb.b)/100, 10)
				});
			},
			setHue = function (hsb, cal) {
				$(cal).data('colorpicker').hue.css('top', parseInt(150 - 150 * hsb.h/360, 10));
			},
			setCurrentColor = function (hsb, cal) {
				$(cal).data('colorpicker').currentColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			setNewColor = function (hsb, cal) {
				$(cal).data('colorpicker').newColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			keyDown = function (ev) {
				var pressedKey = ev.charCode || ev.keyCode || -1;
				if ((pressedKey > charMin && pressedKey <= 90) || pressedKey == 32) {
					return false;
				}
				var cal = $(this).parent().parent();
				if (cal.data('colorpicker').livePreview === true) {
					change.apply(this);
				}
			},
			change = function (ev) {
				var cal = $(this).parent().parent(), col;
				if (this.parentNode.className.indexOf('_hex') > 0) {
					cal.data('colorpicker').color = col = HexToHSB(fixHex(this.value));
					var rgb = HexToRGB( fixHex(this.value ) );
					if (ev) {
						fillRGBFieldsFromRGB(rgb, cal.get(0));
						fillHSBFields(col, cal.get(0));
					}
				} else if (this.parentNode.className.indexOf('_hsb') > 0) {
					cal.data('colorpicker').color = col = fixHSB({
						h: parseInt(cal.data('colorpicker').fields.eq(4).val(), 10),
						s: parseInt(cal.data('colorpicker').fields.eq(5).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(6).val(), 10)
					});
					if (ev) {
						fillRGBFields(col, cal.get(0));
						fillHexFields(col, cal.get(0));
					}
				} else {
					var rgb = fixRGB({
						r: parseInt(cal.data('colorpicker').fields.eq(1).val(), 10),
						g: parseInt(cal.data('colorpicker').fields.eq(2).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(3).val(), 10)
					});
					cal.data('colorpicker').color = col = RGBToHSB(rgb);
					
					if (ev) {
						fillHexFieldsFromRGB(rgb, cal.get(0));
						fillHSBFields(col, cal.get(0));
					}
				}
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
				cal.data('colorpicker').onChange.apply(cal, [col, HSBToHex(col), HSBToRGB(col)]);
			},
			blur = function (ev) {
				var cal = $(this).parent().parent();
				cal.data('colorpicker').fields.parent().removeClass('colorpicker_focus');
			},
			focus = function () {
				charMin = this.parentNode.className.indexOf('_hex') > 0 ? 70 : 65;
				$(this).parent().parent().data('colorpicker').fields.parent().removeClass('colorpicker_focus');
				$(this).parent().addClass('colorpicker_focus');
			},
			downIncrement = function (ev) {
//				var field = $(this).parent().find('input').focus();
				var field = $(this).parent().find('input').trigger('focus');
				var current = {
					el: $(this).parent().addClass('colorpicker_slider'),
					max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : (this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255),
					y: ev.pageY,
					field: field,
					val: parseInt(field.val(), 10),
					preview: $(this).parent().parent().data('colorpicker').livePreview					
				};
				$(document).on('mouseup', current, upIncrement);
				$(document).on('mousemove', current, moveIncrement);
			},
			moveIncrement = function (ev) {
				ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val + ev.pageY - ev.data.y, 10))));
				if (ev.data.preview) {
					change.apply(ev.data.field.get(0), [true]);
				}
				return false;
			},
			upIncrement = function (ev) {
				change.apply(ev.data.field.get(0), [true]);
//				ev.data.el.removeClass('colorpicker_slider').find('input').focus();
				ev.data.el.removeClass('colorpicker_slider').find('input').trigger('focus');
				$(document).off('mouseup', upIncrement);
				$(document).off('mousemove', moveIncrement);
				return false;
			},
			downHue = function (ev) {
				var current = {
					cal: $(this).parent(),
					y: $(this).offset().top
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).on('mouseup', current, upHue).on('touchend', current, upHue);
				$(document).on('mousemove', current, moveHue).on('touchmove', current, moveHue);
			},
			moveHue = function (ev) {
				
				var evPos = {
					x : ev.pageX,
					y : ev.pageY
				};
				
				if ( ev.originalEvent.touches )
				{
					if ( ev.originalEvent.touches.length > 0 )
					{
						evPos.x = ev.originalEvent.touches[0].pageX;
						evPos.y = ev.originalEvent.touches[0].pageY;
					}
					else return false;
				}
				
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(4)
						.val(parseInt(360*(150 - Math.max(0,Math.min(150,(evPos.y - ev.data.y))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upHue = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).off('mouseup', upHue).off('touchend', upHue);
				$(document).off('mousemove', moveHue).off('touchmove', moveHue);
				return false;
			},
			downSelector = function (ev) {
				var current = {
					cal: $(this).parent(),
					pos: $(this).offset()
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).on('mouseup', current, upSelector).on('touchend', current, upSelector);
				$(document).on('mousemove', current, moveSelector).on('touchmove', current, moveSelector);
				ev.data = current;
				moveSelector(ev);
			},
			moveSelector = function (ev) {
				
				var evPos = {
					x : ev.pageX,
					y : ev.pageY
				};
				
				if ( ev.originalEvent.touches )
				{
					if ( ev.originalEvent.touches.length > 0 )
					{
						evPos.x = ev.originalEvent.touches[0].pageX;
						evPos.y = ev.originalEvent.touches[0].pageY;
					}
					else return false;
				}
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(6)
						.val(parseInt(100*(150 - Math.max(0,Math.min(150,(evPos.y - ev.data.pos.top))))/150, 10))
						.end()
						.eq(5)
						.val(parseInt(100*(Math.max(0,Math.min(150,(evPos.x - ev.data.pos.left))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upSelector = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).off('mouseup', upSelector).off('touchend', upSelector);
				$(document).off('mousemove', moveSelector).off('touchmove', moveSelector);
				return false;
			},
			enterSubmit = function (ev) {
				$(this).addClass('colorpicker_focus');
			},
			leaveSubmit = function (ev) {
				$(this).removeClass('colorpicker_focus');
			},
			clickSubmit = function (ev) {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').color;
				cal.data('colorpicker').origColor = col;
				setCurrentColor(col, cal.get(0));
				cal.data('colorpicker').onSubmit(col, HSBToHex(col), HSBToRGB(col), cal.data('colorpicker').el);
			},
			clickCancel = function (ev) {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').origColor;
				cal.data('colorpicker').origColor = col;
				setCurrentColor(col, cal.get(0));
				//cal.data('colorpicker').onSubmit(col, HSBToHex(col), HSBToRGB(col), cal.data('colorpicker').el);
				cal.data('colorpicker').onChange.apply(cal, [col, HSBToHex(col), HSBToRGB(col)]);
				cal.hide();
				$(document).off('mousedown', hide);
			},
			
			clickClear = function(ev) {
				var cal = $(this).parent();
				if ( cal.data('colorpicker').onClear )
					cal.data('colorpicker').onClear.call(cal);
				cal.hide();
				$(document).off('mousedown', hide);
			},
			show = function (ev) {
				var cal = $('#' + $(this).data('colorpickerId'));
				cal.data('colorpicker').onBeforeShow.apply(this, [cal.get(0)]);
				var pos = $(this).offset();
				var viewPort = getViewport();
				var top = pos.top + this.offsetHeight;
				var left = pos.left + 20;
				if (top + 176 > viewPort.t + viewPort.h) {
					top -= this.offsetHeight + 176;
				}
				if (left + 356 > viewPort.l + viewPort.w) {
					left -= 356;
				}
				if ( left < 0 ) left = 0;
				cal.css({left: left + 'px', top: top + 'px'});
				if (cal.data('colorpicker').onShow.apply(this, [cal.get(0)]) != false) {
					cal.show();
				}
				$(document).on('mousedown', {cal: cal}, hide);
				return false;
			},
			hide = function (ev) {
				if (!isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
					if (ev.data.cal.data('colorpicker').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
						ev.data.cal.hide();
					}
					$(document).off('mousedown', hide);
				}
			},
			isChildOf = function(parentEl, el, container) {
				if (parentEl == el) {
					return true;
				}
				if (parentEl.contains) {
					return parentEl.contains(el);
				}
				if ( parentEl.compareDocumentPosition ) {
					return !!(parentEl.compareDocumentPosition(el) & 16);
				}
				var prEl = el.parentNode;
				while(prEl && prEl != container) {
					if (prEl == parentEl)
						return true;
					prEl = prEl.parentNode;
				}
				return false;
			},
			getViewport = function () {
				var m = document.compatMode == 'CSS1Compat';
				return {
					l : window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
					t : window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop),
					w : window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth),
					h : window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight)
				};
			},
			fixHSB = function (hsb) {
				return {
					h: Math.min(360, Math.max(0, hsb.h)),
					s: Math.min(100, Math.max(0, hsb.s)),
					b: Math.min(100, Math.max(0, hsb.b))
				};
			}, 
			fixRGB = function (rgb) {
				return {
					r: Math.min(255, Math.max(0, rgb.r)),
					g: Math.min(255, Math.max(0, rgb.g)),
					b: Math.min(255, Math.max(0, rgb.b))
				};
			},
			fixHex = function (hex) {
				var len = 6 - hex.length;
				if (len > 0) {
					var o = [];
					for (var i=0; i<len; i++) {
						o.push('0');
					}
					o.push(hex);
					hex = o.join('');
				}
				return hex;
			}, 
			HexToRGB = function (hex) {
				var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
				return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
			},
			HexToHSB = function (hex) {
				return RGBToHSB(HexToRGB(hex));
			},
			RGBToHSB = function (rgb) {
				var hsb = {
					h: 0,
					s: 0,
					b: 0
				};
				var min = Math.min(rgb.r, rgb.g, rgb.b);
				var max = Math.max(rgb.r, rgb.g, rgb.b);
				var delta = max - min;
				hsb.b = max;
				if (max != 0) {
					
				}
				hsb.s = max != 0 ? 255 * delta / max : 0;
				if (hsb.s != 0) {
					if (rgb.r == max) {
						hsb.h = (rgb.g - rgb.b) / delta;
					} else if (rgb.g == max) {
						hsb.h = 2 + (rgb.b - rgb.r) / delta;
					} else {
						hsb.h = 4 + (rgb.r - rgb.g) / delta;
					}
				} else {
					hsb.h = -1;
				}
				hsb.h *= 60;
				if (hsb.h < 0) {
					hsb.h += 360;
				}
				hsb.s *= 100/255;
				hsb.b *= 100/255;
				return hsb;
			},
			HSBToRGB = function (hsb) {
				var rgb = {};
				var h = Math.round(hsb.h);
				var s = Math.round(hsb.s*255/100);
				var v = Math.round(hsb.b*255/100);
				if(s == 0) {
					rgb.r = rgb.g = rgb.b = v;
				} else {
					var t1 = v;
					var t2 = (255-s)*v/255;
					var t3 = (t1-t2)*(h%60)/60;
					if(h==360) h = 0;
					if(h<60) {rgb.r=t1;	rgb.b=t2; rgb.g=t2+t3}
					else if(h<120) {rgb.g=t1; rgb.b=t2;	rgb.r=t1-t3}
					else if(h<180) {rgb.g=t1; rgb.r=t2;	rgb.b=t2+t3}
					else if(h<240) {rgb.b=t1; rgb.r=t2;	rgb.g=t1-t3}
					else if(h<300) {rgb.b=t1; rgb.g=t2;	rgb.r=t2+t3}
					else if(h<360) {rgb.r=t1; rgb.g=t2;	rgb.b=t1-t3}
					else {rgb.r=0; rgb.g=0;	rgb.b=0}
				}
				return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
			},
			RGBToHex = function (rgb) {
				var hex = [
					rgb.r.toString(16),
					rgb.g.toString(16),
					rgb.b.toString(16)
				];
				$.each(hex, function (nr, val) {
					if (val.length == 1) {
						hex[nr] = '0' + val;
					}
				});
				return hex.join('');
			},
			HSBToHex = function (hsb) {
				return RGBToHex(HSBToRGB(hsb));
			},
			restoreOriginal = function () {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').origColor;
				cal.data('colorpicker').color = col;
				fillRGBFields(col, cal.get(0));
				fillHexFields(col, cal.get(0));
				fillHSBFields(col, cal.get(0));
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
			};
		return {
			init: function (opt) {
				opt = $.extend({}, defaults, opt||{});
				if (typeof opt.color == 'string') {
					opt.color = HexToHSB(opt.color);
				} else if (opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) {
					opt.color = RGBToHSB(opt.color);
				} else if (opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) {
					opt.color = fixHSB(opt.color);
				} else {
					return this;
				}
				return this.each(function () {
					if (!$(this).data('colorpickerId')) {
						var options = $.extend({}, opt);
						options.origColor = opt.color;
						var id = 'collorpicker_' + parseInt(Math.random() * 1000);
						$(this).data('colorpickerId', id);
						var cal = $(tpl).attr('id', id);
						if (options.flat) {
							cal.appendTo(this).show();
						} else {
							cal.appendTo(document.body);
						}
						options.fields = cal
											.find('input')
												.on('keyup', keyDown)
												.on('change', change)
												.on('blur', blur)
												.on('focus', focus);
						cal
							.find('span')
							.on('mousedown', downIncrement)
							.on('touchstart', downIncrement)
							.end()
							.find('>div.colorpicker_current_color').on('click', restoreOriginal);
						options.selector = cal.find('div.colorpicker_color')
							.on('mousedown', downSelector)
							.on('touchstart', downSelector);
						options.selectorIndic = options.selector.find('div div');
						options.el = this;
						options.hue = cal.find('div.colorpicker_hue div');
						cal.find('div.colorpicker_hue')
							.on('mousedown', downHue)
							.on('touchstart', downHue);
						options.newColor = cal.find('div.colorpicker_new_color');
						options.currentColor = cal.find('div.colorpicker_current_color');
						cal.data('colorpicker', options);
						cal.find('div.colorpicker_submit')
							.on('mouseenter', enterSubmit)
							.on('mouseleave', leaveSubmit)
							.on('click', clickSubmit);
						cal.find('div.colorpicker_clear')
							.on('click', clickClear);
							cal.find('div.colorpicker_cancel')
								.on('click', clickCancel);
						if ( options.clearButton != false )
						{
							cal.find('div.colorpicker_clear').show();
						}
						else
						{
							cal.find('div.colorpicker_submit').css({
								"left" : "300px",
								"width" : "44px"
							} );
							cal.find('div.colorpicker_clear').hide();
						}
						fillRGBFields(options.color, cal.get(0));
						fillHSBFields(options.color, cal.get(0));
						fillHexFields(options.color, cal.get(0));
						setHue(options.color, cal.get(0));
						setSelector(options.color, cal.get(0));
						setCurrentColor(options.color, cal.get(0));
						setNewColor(options.color, cal.get(0));
						if (options.flat) {
							cal.css({
								position: 'relative',
								display: 'block'
							});
						} else {
							$(this).on(options.eventName, show);
						}
					}
				});
			},
			showPicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						show.apply(this);
					}
				});
			},
			hidePicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						$('#' + $(this).data('colorpickerId')).hide();
					}
				});
			},
			setColor: function(col) {
				if (typeof col == 'string') {
					col = HexToHSB(col);
				} else if (col.r != undefined && col.g != undefined && col.b != undefined) {
					col = RGBToHSB(col);
				} else if (col.h != undefined && col.s != undefined && col.b != undefined) {
					col = fixHSB(col);
				} else {
					return this;
				}
				return this.each(function(){
					if ($(this).data('colorpickerId')) {
						var cal = $('#' + $(this).data('colorpickerId'));
						cal.data('colorpicker').color = col;
						cal.data('colorpicker').origColor = col;
						fillRGBFields(col, cal.get(0));
						fillHSBFields(col, cal.get(0));
						fillHexFields(col, cal.get(0));
						setHue(col, cal.get(0));
						setSelector(col, cal.get(0));
						setCurrentColor(col, cal.get(0));
						setNewColor(col, cal.get(0));
					}
				});
			}
		};
	}();
	$.fn.extend({
		ColorPicker: ColorPicker.init,
		ColorPickerHide: ColorPicker.hidePicker,
		ColorPickerShow: ColorPicker.showPicker,
		ColorPickerSetColor: ColorPicker.setColor
	});
})(jQuery);


/************************************************************************
 jquery.ui.touch-punch.js
 ************************************************************************/

(function ($) {
	

	// Detect touch support
  
	$.support.touch = 'ontouchend' in document;
  
  
  
	// Ignore browsers without touch support
  
	if (!$.support.touch) {
  
	  return;
  
	}
  
  
  
	var mouseProto = $.ui.mouse.prototype,
  
		_mouseInit = mouseProto._mouseInit,
  
		_mouseDestroy = mouseProto._mouseDestroy,
  
		touchHandled;
  
  
  
	/**
  
	 * Simulate a mouse event based on a corresponding touch event
  
	 * @param {Object} event A touch event
  
	 * @param {String} simulatedType The corresponding mouse event
  
	 */
  
	function simulateMouseEvent (event, simulatedType) {
  
  
  
	  // Ignore multi-touch events
  
	  if (event.originalEvent.touches.length > 1) {
  
		return;
  
	  }
  
  
  
	  event.preventDefault();
  
  
  
	  var touch = event.originalEvent.changedTouches[0],
  
		  simulatedEvent = document.createEvent('MouseEvents');
  
	  
  
	  // Initialize the simulated mouse event using the touch event's coordinates
  
	  simulatedEvent.initMouseEvent(
  
		simulatedType,    // type
  
		true,             // bubbles                    
  
		true,             // cancelable                 
  
		window,           // view                       
  
		1,                // detail                     
  
		touch.screenX,    // screenX                    
  
		touch.screenY,    // screenY                    
  
		touch.clientX,    // clientX                    
  
		touch.clientY,    // clientY                    
  
		false,            // ctrlKey                    
  
		false,            // altKey                     
  
		false,            // shiftKey                   
  
		false,            // metaKey                    
  
		0,                // button                     
  
		null              // relatedTarget              
  
	  );
  
  
  
	  // Dispatch the simulated event to the target element
  
	  event.target.dispatchEvent(simulatedEvent);
  
	}
  
  
  
	/**
  
	 * Handle the jQuery UI widget's touchstart events
  
	 * @param {Object} event The widget element's touchstart event
  
	 */
  
	mouseProto._touchStart = function (event) {
  
  
  
	  var self = this;
  
  
  
	  // Ignore the event if another widget is already being handled
  
	  if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
  
		return;
  
	  }
  
  
  
	  // Set the flag to prevent other widgets from inheriting the touch event
  
	  touchHandled = true;
  
  
  
	  // Track movement to determine if interaction was a click
  
	  self._touchMoved = false;
  
  
  
	  // Simulate the mouseover event
  
	  simulateMouseEvent(event, 'mouseover');
  
  
  
	  // Simulate the mousemove event
  
	  simulateMouseEvent(event, 'mousemove');
  
  
  
	  // Simulate the mousedown event
  
	  simulateMouseEvent(event, 'mousedown');
  
	};
  
  
  
	/**
  
	 * Handle the jQuery UI widget's touchmove events
  
	 * @param {Object} event The document's touchmove event
  
	 */
  
	mouseProto._touchMove = function (event) {
  
  
  
	  // Ignore event if not handled
  
	  if (!touchHandled) {
  
		return;
  
	  }
  
  
  
	  // Interaction was not a click
  
	  this._touchMoved = true;
  
  
  
	  // Simulate the mousemove event
  
	  simulateMouseEvent(event, 'mousemove');
  
	};
  
  
  
	/**
  
	 * Handle the jQuery UI widget's touchend events
  
	 * @param {Object} event The document's touchend event
  
	 */
  
	mouseProto._touchEnd = function (event) {
  
  
  
	  // Ignore event if not handled
  
	  if (!touchHandled) {
  
		return;
  
	  }
  
  
  
	  // Simulate the mouseup event
  
	  simulateMouseEvent(event, 'mouseup');
  
  
  
	  // Simulate the mouseout event
  
	  simulateMouseEvent(event, 'mouseout');
  
	  //alert( '' );
  
	  // If the touch interaction did not move, it should trigger a click
  
	  //if (!this._touchMoved) {
  
  
  
		// Simulate the click event
  
		simulateMouseEvent(event, 'click');
  
	  //}
  
  
  
	  // Unset the flag to allow other widgets to inherit the touch event
  
	  touchHandled = false;
  
	};
  
  
  
	/**
  
	 * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
  
	 * This method extends the widget with bound touch event handlers that
  
	 * translate touch events to mouse events and pass them to the widget's
  
	 * original mouse event handling methods.
  
	 */
  
	mouseProto._mouseInit = function () {
  
	  
  
	  var self = this;
  
  
  
	  // Delegate the touch handlers to the widget's element
  
	  self.element.on({
  
		touchstart: $.proxy(self, '_touchStart'),
  
		touchmove: $.proxy(self, '_touchMove'),
  
		touchend: $.proxy(self, '_touchEnd')
  
	  });
  
  
  
	  // Call the original $.ui.mouse init method
  
	  _mouseInit.call(self);
  
	};
  
  
  
	/**
  
	 * Remove the touch event handlers
  
	 */
  
	mouseProto._mouseDestroy = function () {
  
	  
  
	  var self = this;
  
  
  
	  // Delegate the touch handlers to the widget's element
  
	  self.element.off({
  
		touchstart: $.proxy(self, '_touchStart'),
  
		touchmove: $.proxy(self, '_touchMove'),
  
		touchend: $.proxy(self, '_touchEnd')
  
	  });
  
  
  
	  // Call the original $.ui.mouse destroy method
  
	  _mouseDestroy.call(self);
  
	};
  
  
  
  })(jQuery);