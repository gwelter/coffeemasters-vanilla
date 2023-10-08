const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(link => {
            link.addEventListener("click", e => {
                e.preventDefault();
                const route = link.getAttribute("href");
                Router.go(route);
            });
        });
        window.addEventListener("popstate", e => {
            Router.go(e.state.route, false);
        });

        // Check the initial URL
        Router.go(location.pathname);
    },
    go: (route, addToHistory = true) => {
        console.log(route);
        if (addToHistory) {
            history.pushState({ route }, '', route);
        }
        let pageELement = null;
        switch (route) {
            case "/":
                pageELement = document.createElement("h1");
                pageELement.textContent = "Menu";
                break;
            case "/order":
                pageELement = document.createElement("h1");
                pageELement.textContent = "Your Order";
                break;
            default:
                if (route.startsWith("/product/")) {
                    const paramId = route.substring(route.lastIndexOf("/") + 1);
                    pageELement = document.createElement("h1");
                    pageELement.textContent = `Details of product {paramId}`;
                    pageELement.dataset.id = paramId;
                }
                break;
        }
        if (!pageELement) {
            pageELement = document.createElement("h1");
            pageELement.textContent = "404";
        }
        const main = document.querySelector("main");
        // main.children[0].remove();

        // Quick and durty
        main.innerHTML = "";
        main.appendChild(pageELement);
        window.scrollX = 0;
        window.scrollY = 0;
    }
}

export default Router;