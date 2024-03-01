function Consultorio(nombre, paciente) {
  let _nombre = nombre; //let
  this.paciente = paciente;

  Object.defineProperty(this, "_getNombre", {
    get: function () {
      return _nombre;
    },
  });

  Object.defineProperty(this, "_setNombre", {
    set: function (nombre) {
      _nombre = nombre;
    },
  });
}

Consultorio.prototype.getNombre = function () {
  return this._getNombre;
};
Consultorio.prototype.setNombre = function (nombre) {
  this._setNombre = nombre;
};

function Paciente(nombre, edad, rut, diagnostico) {
  let _nombre = nombre;
  this.edad = edad;
  this.rut = rut;
  this.diagnostico = diagnostico;
  // funcion getter
  Object.defineProperty(this, "_getNombre", {
    get: function () {
      return _nombre;
    },
  });
  // funcion setter
  Object.defineProperty(this, "_setNombre", {
    set: function (nombre) {
      _nombre = nombre;
    },
  });
}
Paciente.prototype.getNombre = function () {
  return this._getNombre;
};
Paciente.prototype.setNombre = function (nombre) {
  this._setNombre = nombre;
};

p1 = new Paciente("Alejandra", 41, "12345678-9", "Tendinitis");
p2 = new Paciente("Patricia", 48, "98765432-1", "Resistencia");
p3 = new Paciente("Daniel", 80, "2345678-1", "Cancer");
p4 = new Paciente("Maria", 30, "20123456-8", "Bipolar");
p5 = new Paciente("Marcia", 45, "11789234-9", "Rosacea");

c1 = new Consultorio("Lomas Coloradas", [p1, p2]);
c2 = new Consultorio("Tucapel", [p3, p4, p5]);

console.log(c1.getNombre(), c1.paciente);
console.log(c2.getNombre(), c2.paciente);
