$(document).ready(function () {
	$('.sidenav').sidenav({edge:"right"});
	$('.collapsible').collapsible();
	$('.tooltipped').tooltip()
	$('select').formSelect();
	$('.datepicker').datepicker({
		format:"dd.mm.yyyy",
		yearRange: 3,
		showClearBtn: true,
		i18n: {
			done: "Select"
		}
	});

	validateMaterializeSelect();
    function validateMaterializeSelect() {
		// set css styles that we want to apply
        let classValid = { "border-bottom": "1px solid #4caf50", "box-shadow": "0 1px 0 0 #4caf50" };
        let classInvalid = { "border-bottom": "1px solid #f44336", "box-shadow": "0 1px 0 0 #f44336" };
		// un-hide the 'required' elements but give them no height/width
		// (so they are on the DOM but not visible on the site)
        if ($("select.validate").prop("required")) {
            $("select.validate").css({ "display": "block", "height": "0", "padding": "0", "width": "0", "position": "absolute" });
        }
		// gives the class of valid to the element if anything except the
		// default (disabled class) is selected
        $(".select-wrapper input.select-dropdown").on("focusin", function () {
            $(this).parent(".select-wrapper").on("change", function () {
                if ($(this).children("ul").children("li.selected:not(.disabled)").on("click", function () { })) {
                    $(this).children("input").css(classValid);
                }
            });
        }).on("click", function () {
			// if the user selects something the valid class is applied
            if ($(this).parent(".select-wrapper").children("ul").children("li.selected:not(.disabled)").css("background-color") === "rgba(0, 0, 0, 0.03)") {
                $(this).parent(".select-wrapper").children("input").css(classValid);
			// if the user has not selected anything then the invalid class is applied
            } else {
                $(".select-wrapper input.select-dropdown").on("focusout", function () {
                    if ($(this).parent(".select-wrapper").children("select").prop("required")) {
                        if ($(this).css("border-bottom") != "1px solid rgb(76, 175, 80)") {
                            $(this).parent(".select-wrapper").children("input").css(classInvalid);
                        }
                    }
                });
            }
        });
    }
});