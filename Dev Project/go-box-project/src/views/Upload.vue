<template>
    <div class="center-flexbox">
        <h1> Upload image here </h1>
        <div id="file-form">
            <form action="submit">
                <input type="file" id="myFile" name="filename">
                <input type="submit">
            </form>
        </div>

    </div>
</template>


<style>

.center-flexbox {
    background-color: gainsboro;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
    padding: 300px;
    bottom: 100px;
    border-radius: 20px;
}

#file-form {
    display: block;
    justify-content: center;
}

</style>