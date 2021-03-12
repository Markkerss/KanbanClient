<template>
  <div id="boards-page" class="background-image">
        <div id="backlog" class="drop-zone">
            <div class="big-card">
                <div class="big-card-label">
                    <p >Backlog</p>   
                    <span>
                        <i class="fal fa-plus fa-lg btn" aria-hidden="true" style="position:relative; top:-0.4rem;right:-8rem;"></i>
                    </span>             
                </div>
                
                
            </div>
        </div>
        <div id="product" class="drop-zone">
            <div class="big-card">
                <div class="big-card-label">
                    <p>In Progress</p>   
                    <span>
                        <i class="fal fa-plus fa-lg btn" aria-hidden="true" style="position:relative; top:-0.4rem;right:-8.3rem;"></i>
                    </span>   
                </div> 
                <div class="card text-white bg-primary mb-3">
                    <div class="card-body">
                        <div class="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </div>
                        <button class="btn" href='#'><i class="fal fa-pencil-alt" aria-hidden="true" style="position:absolute; top:3.7rem; right:2.5rem;"></i></button>
                        <button class="btn" href='#'><i class="fal fa-trash-alt" aria-hidden="true" style="position:absolute; top:3.7rem; right:1rem;"></i></button>                  
                    </div>
                </div>
            </div>
        </div>
        <div id="development" class="drop-zone">
            <div class="big-card">
                <div class="big-card-label">
                    <p>Tested</p>   
                    <span>
                        <i class="fal fa-plus fa-lg btn" aria-hidden="true" style="position:relative; top:-0.4rem;right:-5.8rem;"></i>
                    </span>   
                </div>
                <div class="card text-white bg-primary mb-3">
                    <div class="card-body">
                        <div class="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </div>
                        <button class="btn" href='#'><i class="fal fa-pencil-alt" aria-hidden="true" style="position:absolute; top:3.7rem; right:2.5rem;"></i></button>
                        <button class="btn" href='#'><i class="fal fa-trash-alt" aria-hidden="true" style="position:absolute; top:3.7rem; right:1rem;"></i></button>                  
                    </div>
                </div>
            </div>
        </div>
        <div id="done" class="drop-zone">
            <div class="big-card">
                <div class="big-card-label">
                    <p>Done</p>   
                    <span>
                        <i class="fal fa-plus fa-lg btn" aria-hidden="true" style="position:relative; top:-0.4rem; right:-9.5rem;"></i>
                    </span>   
                </div>
                <div class="card text-white bg-primary mb-3">
                    <div class="card-body">
                        <div class="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </div>
                        <button class="btn" href='#'><i class="fal fa-pencil-alt" aria-hidden="true" style="position:absolute; top:3.7rem; right:2.5rem;"></i></button>
                        <button class="btn" href='#'><i class="fal fa-trash-alt" aria-hidden="true" style="position:absolute; top:3.7rem; right:1rem;"></i></button>                  
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .background-image {
        background-image: url("mountain2.webp");
        height: 100%; 
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>