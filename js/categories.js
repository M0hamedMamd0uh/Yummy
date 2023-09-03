import { Display } from "./display.js";

export class Categories {
  constructor() {
    this.getCategoriesData();
  }
  async getCategoriesData() {
    $(".loading-main-section").removeClass("d-none");
    $(".loading-main-section").addClass("d-flex");
    // $(".loading-main-section").fadeIn(300);

    let request = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );

    let response = await request.json();

    this.displayCategoriesResults(response.categories, "categories");
    $(".loading-main-section").removeClass("d-flex");
    $(".loading-main-section").addClass("d-none");
    //  $(".loading-main-section").fadeOut(300);
  }

  displayCategoriesResults(results, type) {
    let temp = "";
    if (type === "categories") {
      for (let i = 0; i < results.length; i++) {
        temp += `
      
        <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="item" id="${results[i].strCategory}">
              <div class="image-box">
                <img
                  src=${results[i].strCategoryThumb}
                  class="w-100"
                  alt=""
                />
                <div class="flex-column">
                  <h3>${results[i].strCategory}</h3>
                  <p>${results[i].strCategoryDescription
                    .split(" ")
                    .slice(0, 10)
                    .join(" ")} ....</p>
                </div>
              </div>
            </div>
          </div>`;
      }

      document.getElementById("main-section").innerHTML = temp;

      let allCategories = document.querySelectorAll(".item");
      for (let i = 0; i < allCategories.length; i++) {
        allCategories[i].addEventListener("click", () => {
          this.filterByCategory(allCategories[i].id);
        });
      }
    } else if (type === "meals") {
      for (let i = 0; i < results.length; i++) {
        temp += `
      
        <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="item" id="${results[i].idMeal}">
              <div class="image-box">
                <img
                  src=${results[i].strMealThumb}
                  class="w-100"
                  alt=""
                />
                <div class="flex-column">
                  <h3>${results[i].strMeal}</h3>
                </div>
              </div>
            </div>
          </div>`;
      }

      document.getElementById("main-section").innerHTML = temp;

      let allCategories = document.querySelectorAll(".item");
      for (let i = 0; i < allCategories.length; i++) {
        allCategories[i].addEventListener("click", () => {
          new Display(allCategories[i].id);
        });
      }
    }
  }

  async filterByCategory(category) {
    let width = $("#sideNavContent").innerWidth();
    $(".sideNav").css("left", `-${width}px`);
    $("#open").css("display", "block");
    $("#close").css("display", "none");

    $(".loading-main-section").removeClass("d-none");
    $(".loading-main-section").addClass("d-flex");
    // $(".loading-main-section").fadeIn(300);

    let request = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );

    let response = await request.json();

    this.displayCategoriesResults(response.meals.slice(0, 20), "meals");
    $(".loading-main-section").removeClass("d-flex");
    $(".loading-main-section").addClass("d-none");
    //  $(".loading-main-section").fadeOut(300);
  }
}
