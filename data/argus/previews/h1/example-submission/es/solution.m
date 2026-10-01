function E = solution(alpha, z)
%SOLUTION Ejemplo didáctico de interfaz para la participación de prueba.
%
%   E = solution(alpha, z)
%
%   Recibe alpha escalar y toda la matriz z en una única llamada y devuelve
%   E con las mismas dimensiones de z. Esta firma es obligatoria.
%
%   IMPORTANTE: este archivo demuestra solamente el formato de entrega. La
%   serie directa siguiente prioriza claridad, no rendimiento, y puede ser
%   numéricamente inadecuada en el dominio de la participación. No es una
%   estrategia competitiva recomendada y no se garantiza que supere la
%   evaluación de precisión.

  tol = 1e-14;
  max_terms = 5000;

  E = zeros(size(z));
  for idx = 1:numel(z)
    zi = z(idx);
    term = 1;
    total = term;
    k = 1;
    while abs(term) > tol && k < max_terms
      term = (zi ^ k) / gamma(alpha * k + 1);
      total = total + term;
      k = k + 1;
    end
    E(idx) = total;
  end
end
