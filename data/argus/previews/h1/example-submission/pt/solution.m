function E = solution(alpha, z)
%SOLUTION Exemplo didático de interface para a participação de teste.
%
%   E = solution(alpha, z)
%
%   Recebe alpha escalar e toda a matriz z em uma única chamada e devolve
%   E com as mesmas dimensões de z. Esta assinatura é obrigatória.
%
%   IMPORTANTE: este arquivo demonstra somente o formato de entrega. A série
%   direta abaixo prioriza clareza, não desempenho, e pode ser numericamente
%   inadequada no domínio da participação. Não é uma estratégia competitiva
%   recomendada e não há garantia de passar a avaliação de precisão.

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
