class Car {
    constructor(modelo, preco, alturacacamba, alturaveiculo, alturasolo, capacidadecarga, motor, potencia, volumecacamba, roda, imagem) {
        this.modelo = modelo;
        this.preco = preco;
        this.alturacacamba = alturacacamba;
        this.alturaveiculo = alturaveiculo;
        this.alturasolo = alturasolo;
        this.capacidadecarga = capacidadecarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumecacamba = volumecacamba;
        this.roda = roda;
        this.imagem = imagem;
    }
}

let carsToCompare = [];

function GetCarArrPosition(car) {
    for (let i = 0; i < carsToCompare.length; i++) {
        if (carsToCompare[i].modelo === car.modelo) {
            return i;
        }
    }
    return -1;
}

function SetCarToCompare(checkbox, car) {
    const position = GetCarArrPosition(car);

    if (checkbox.checked) {
        if (carsToCompare.length === 2) {
            checkbox.checked = false;
            alert("Escolha no máximo dois veículos.");
            return;
        }

        if (position === -1) {
            carsToCompare.push(car);
        }
    } else if (position !== -1) {
        carsToCompare.splice(position, 1);
    }
}

function ShowCompare() {
    if (carsToCompare.length !== 2) {
        alert("Selecione dois carros antes de comparar.");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "flex";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
    for (let i = 0; i < 2; i++) {
        const car = carsToCompare[i];

        document.getElementById(`compare_image_${i}`).innerHTML = `<img src="${car.imagem}" alt="${car.modelo}">`;
        document.getElementById(`compare_modelo_${i}`).textContent = car.modelo;
        document.getElementById(`compare_alturacacamba_${i}`).textContent = car.alturacacamba;
        document.getElementById(`compare_alturaveiculo_${i}`).textContent = car.alturaveiculo;
        document.getElementById(`compare_alturasolo_${i}`).textContent = car.alturasolo;
        document.getElementById(`compare_capacidadecarga_${i}`).textContent = car.capacidadecarga;
        document.getElementById(`compare_motor_${i}`).textContent = car.motor;
        document.getElementById(`compare_potencia_${i}`).textContent = car.potencia;
        document.getElementById(`compare_volumecacamba_${i}`).textContent = car.volumecacamba;
        document.getElementById(`compare_roda_${i}`).textContent = car.roda;
        document.getElementById(`compare_preco_${i}`).textContent = `R$ ${car.preco.toLocaleString("pt-BR")}`;
    }
}
