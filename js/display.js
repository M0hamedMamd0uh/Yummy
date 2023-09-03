export class Display {
  constructor(ID) {
    let width = $("#sideNavContent").innerWidth();
    $(".sideNav").css("left", `-${width}px`);
    $("#open").css("display", "block");
    $("#close").css("display", "none");
    this.fullMealDetails(ID);
  }
  async fullMealDetails(mealID) {
    $(".loading-main-section").removeClass("d-none");
    $(".loading-main-section").addClass("d-flex");
    // $(".loading-main-section").fadeIn(300);

    let request = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
    );

    let response = await request.json();

    this.displayMealDetails(response.meals[0]);
    $(".loading-main-section").removeClass("d-flex");
    $(".loading-main-section").addClass("d-none");
    // $(".loading-main-section").fadeOut(300);
  }

  displayMealDetails(results) {
    // for remove search section in another sections
    $("#searchInput").addClass("d-none");
    // for make fields empty after move to another page
    $("#searchName").val("");
    $("#searchLetter").val("");

    let tags;
    let tagTemp = "";
    if (results.strTags === null) {
      tags = "";
      tagTemp = `<li >Null</li>`;
    } else {
      tags = results.strTags.split(",");
      for (let i = 0; i < tags.length; i++) {
        tagTemp += `<li >${tags[i]}</li>`;
      }
    }
    let ingredient = "";
    for (let i = 1; i <= 20; i++) {
      if (
        results[`strIngredient${i}`] === "" ||
        results[`strIngredient${i}`] === null ||
        results[`strMeasure${i}`] === "" ||
        results[`strMeasure${i}`] === null
      ) {
        continue;
      } else {
        ingredient += ` <li>
        ${results[`strMeasure${i}`] + " " + results[`strIngredient${i}`]}
        </li>`;
      }
    }

    let temp = `
          <div class="col-lg-6 col-xl-4">
            <div class="meal-image">
              <img
                src=${results.strMealThumb}
                class="w-100"
                alt=""
              />
              <h3>${results.strMeal}</h3>
            </div>
          </div>
          <div class="col-lg-6 col-xl-8">
            <div class="meal-details">
              <h3 class="fw-bold">Instructions</h3>
              <p>${results.strInstructions}</p>
              <h4><span class="fw-bold">Area</span> : <span>${results.strArea}</span></h4>
              <h4><span class="fw-bold">Category</span> : <span>${results.strCategory}</span></h4>
              <h4>
                <span class="fw-bold">Recipes</span> :
                <ul class="list-unstyled" id="recipes">
                  ${ingredient}
                </ul>
              </h4>
              <h4>
                <span class="fw-bold">Tags</span> :
                <ul class="list-unstyled" id="tags">
                 ${tagTemp}
                </ul>
              </h4>
              <div class="buttons">
                <button class="btn btn-success"> <a href="${results.strSource}" target="_blank">Source</a> </button>
                <button class="btn btn-danger">  <a href="${results.strYoutube}" target="_blank">YouTube</a> </button>
              </div>
            </div>
          </div>`;

    document.getElementById("main-section").innerHTML = temp;
  }
}
