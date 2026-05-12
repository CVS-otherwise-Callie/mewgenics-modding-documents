// I LOVE YOU ISAACDOCS :sob:

$(document).ready(function() {
    var check = "checked";
    if (typeof(Storage) !== "undefined" && localStorage.getItem("highlightResults") == 1) {
        check = ""
    }
    $("div.md-search-result").prepend('<div class="clearSearchMarks"><input type="checkbox" onclick="unmarkStuff()" id="searchMarks" name="scales" ' + check + '><label for="searchMarks">Highlight search results</label></div>');
});

$(document).ready(function() {
    if (window.location.hash.replace("#", "") != "") {
        jumpToElement($(window.location.hash));
    }
});

function unmarkStuff() {
    if (typeof(Storage) !== "undefined") {
        var highlightResultsState = localStorage.getItem("highlightResults");
        if (highlightResultsState == null || highlightResultsState == 0) {
            highlightResultsState = 1;
            $content.unmark();
            $("body").addClass("hideMarks");
            $(".clearSearchMarks").prop('checked', false);
        } else {
            highlightResultsState = 0;
            $("body").removeClass("hideMarks");
            $(".clearSearchMarks").prop('checked', true);
        }

        $("li.md-search-result__item").find('a').each(function(e) {
            var jumpTargetValue = $(this).attr('href').split("#");
            var jumpTarget = "";
            if (jumpTargetValue.length > 1) {
                jumpTarget = "#" + jumpTargetValue[1];
            }
            var searchText = "?h=" + $("input[aria-label=\"Search\"]").val();
            var link = $(this).attr('href').split("?")[0].split("#")[0];
            $(this).attr('href', link + searchText + jumpTarget);
        });

        localStorage.setItem("highlightResults", highlightResultsState);
    }
}

function reevaluateLastVisit() {
    if (typeof(Storage) !== "undefined") {
        $(".md-nav[aria-label=\"Last visited\"]").find("a").each(function(index) {
            var lastVisitEntry = getRecentList()[index];
            if (lastVisitEntry !== undefined) {
                $(this).attr("href", lastVisitEntry);
                lastVisitEntry = lastVisitEntry.replace("IsaacDocs/", "").replace("rep/", "").replace("abp/", "").replace("docs/", "");
                var linkName = lastVisitEntry.substring(1, lastVisitEntry.length).replace(".html", "");
                $(this).text(linkName);
            } else {
                $(this).parent().hide();
            }
        });

    } else {
        $(".md-nav[aria-label=\"Last visited\"]").parent().hide();
    }
}

function getRecentList() {
    var recentList = localStorage.getItem("recentlyVisited");
    if (recentList == null) {
        recentList = [];
    } else {
        recentList = recentList.split(',');
    }
    return recentList;
}

function buildContentMap() {
    if (!$("h1").first().text().includes("subsection of a")) {
        //only build map on class-related pages
        return;
    }
    var mapObj = $("<div class=\"contentMap\"><h2 class=\"overviewHeader\">Content Overview</h2><table class=\"contentTable\" id=\"contentOverviewTable\"><thead><tr><th>Return value</th><th>Function</th></tr></thead><tbody></tbody></table><hr/></div>");
    if ($("#class-diagram").length == 0) {
        mapObj.insertAfter($(".md-content__inner").find("h2").first());
    } else {
        // insert content map after mermaid diagram
        mapObj.insertAfter($(".mermaidDiagram").first());
    }

    var tableContent = "";
    $("h4").each(function(index) {
        //remove anchor links and mark objects from variable description headers... we dont need them and they suck
        var cloneH4 = $(this).clone();
        cloneH4.find("a.headerlink").remove();
        cloneH4.find("mark").contents().unwrap();
        var funcParts = cloneH4.html().split(" (");
        var funcFront = funcParts[0].split(" ");
        var funcName = funcFront.pop();
        var parentH3Node = $(this).prev();
        while (parentH3Node.prop("tagName") != "H3") {
            parentH3Node = parentH3Node.prev();
        }
        var funcLink = parentH3Node.find("a").last().attr("href");
        funcName = "<a href=\"" + funcLink + "\">" + funcName + "</a>";
        var ariaLabel = $(this).attr("aria-label");
        if (funcParts.length > 1) {
            tableContent = tableContent + "<tr aria-label=\"" + ariaLabel + "\"><td>" + funcFront.join(" ") + "</td><td aria-label=\"" + ariaLabel + "\" class=\"copyable\">" + funcName + " (" + funcParts[1] + "</td></tr>";
        } else {
            tableContent = tableContent + "<tr aria-label=\"" + ariaLabel + "\"><td>" + funcFront.join(" ") + "</td><td aria-label=\"" + ariaLabel + "\" class=\"copyable\">" + funcName + "</td></tr>";
        }
    });

    $('#contentOverviewTable > tbody').append(tableContent);
}



document$.subscribe(function() {

    buildContentMap();

    // reduce audio volume to 25%
    $("audio").prop("volume", 0.25);

    $(".overviewHeader").click(function() {
        $(this).toggleClass("collapsed");
        $(".contentTable").toggle();
    });

    //moves scroll position on href clicking a bit further up
    $('a[href^="#"]').on('click', function(e) {
        var href = $(this).attr('href');
        jumpToElement(href);
    });


    //Adds search query string to search result links
    // We use an Element observer, to change the search results AFTER they where placed
    var target = document.querySelector('.md-search-result__list')
    var observer = new MutationObserver(function(mutations) {
        $("li.md-search-result__item").each(function(e) {
            var firstATag = $(this).find('a').first();
            colorizeSearchResults(firstATag);
        });
        $("li.md-search-result__item").find('a').each(function(e) {
            hidePlaceholderChar($(this));
        });
        $("article.md-search-result__article").each(function(e) {
            if ($(this).attr("data-md-score") < 0) {
                $(this).parent().parent().hide();
            }
        })

    });
    var config = { attributes: true, childList: true, characterData: true };
    observer.observe(target, config);

});


function hidePlaceholderChar(element) {
    element.html(element.html().replaceAll('·', ""));
}

function colorizeSearchResults(element) {
    var text = element.text();
    if (text.includes("GON")) {
        element.addClass("searchGON");
    } else if (text.includes("SWF")) {
        element.addClass("searchSWF");
    } else if (text.includes("TOOL")) {
        element.addClass("searchTOOL");
    } else if (text.includes("DLL")) {
        element.addClass("searchDLL");
    }
}