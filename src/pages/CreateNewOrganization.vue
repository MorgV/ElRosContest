<script>
import router from '@/router';
import { useRootStore } from '@/stores/root';
export default {
    data() {
        return {
            params: {
                isActive: true,
                name: '',
                shortName: '',
                description: '',
            },
            isSubmit: false,
            rootStore: useRootStore(),
        }
    },
    methods: {
        exit() {
            router.push({ path: '/' })
        },
        addOrganization() {
            this.isSubmit = true
            if (this.params.name && this.params.shortName && this.params.description) {
                console.log('asd')
                const data = this.rootStore.addOrganization(this.params)
                console.log(data)
                this.exit()
            } else {
                console.log('else')
            }
        },
    }
}
</script>

<template>
    <form :class="{ 'was-validated': isSubmit }" class="wrapper needs-validation " novalidate>
        <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Полное название</label>
            <input type="text" v-model="params.name" class="form-control" id="validationCustom01"
                placeholder="Полное название организации" required>
        </div>
        <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Короткое название</label>
            <input type="text" v-model="params.shortName" class="form-control" id="formGroupExampleInput2"
                placeholder="Короткое название организации" required>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Описание</span>
            <textarea class="form-control" v-model="params.description" placeholder="" aria-label="With textarea"
                required></textarea>
        </div>
        <div class="mb-3">
            <label for="formFile" class="form-label">Выберите файл с картинкой</label>
            <input class="form-control" type="file" accept="image/png, image/jpeg" id="formFile">
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck">
            <label class="form-check-label" for="gridCheck">
                Активен
            </label>
        </div>
        <div class="buttons">
            <button type="button" class="btn btn-secondary" @click="exit">Отмена</button>
            <button type="button" class="btn btn-success" @click="addOrganization">Добавить</button>
        </div>
    </form>
</template>

<style scoped>
.wrapper {
    margin: 10% 20%;
    padding: 40px;
    border-radius: 4%;
    background-color: #BDECB6;
    color: #1C231B;
    -webkit-box-shadow: 0px 4px 16px 5px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 4px 16px 5px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 4px 16px 5px rgba(34, 60, 80, 0.2);
}

.wrapper input:focus,
.wrapper textarea:focus {
    border: #1C231B solid 2px;
    -webkit-box-shadow: 0px 4px 16px -7px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 4px 16px -7px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 4px 16px -7px rgba(34, 60, 80, 0.2);
}

.buttons {
    display: flex;
    justify-content: end;
}

.buttons button {
    margin-left: 10px;
}
</style>