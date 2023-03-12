# Linear Algebra 

## I.Vector

### What is a vector?

***A vector*** is a quantity or phenomenon that has two independent properties: ***magnitude*** and ***direction***. 
***Vectors*** are special objects that can be ***added together*** and ***multiplied by scalars*** to produce another object of the same kind. 

*a, Example of Vector*

![Vector](./img'/vt.png "Example of Vector")

*b, Example of Added Vector*

![Vector](./img'/add.png "Example of Added Vector")

*c, Example of Scale Vector*

![Vector](./img'/scale.png "Example of Scale Vector")



### Vector Representation

Only 2D and 3D can use *geometric vectors*. How many *extra dimensions* would the vector have?

In n-dimensional space, the vectors will be represented as follows:
$$
a=
\begin{bmatrix}
a_1\\a_2\\a_3\\...\\a_n 
\end{bmatrix} \in R^n ,
v=
\begin{bmatrix}
1\\2\\3
\end{bmatrix} \in R^3
$$
In multidimensional space vectors also have two properties:*** addition and multiplication***:
$$
\begin{bmatrix}
a_1\\a_2\\...\\a_n 
\end{bmatrix}
+
\begin{bmatrix}
b_1\\b_2\\...\\b_n 
\end{bmatrix}
= \begin{bmatrix}
a_1+b_1\\a_2+b_2\\..\\a_n +b_n 
\end{bmatrix}, \quad
\alpha * 
\begin{bmatrix}
a_1\\a_2\\...\\a_n 
\end{bmatrix}
=\begin{bmatrix}
\alpha *a_1\\\alpha *a_2\\...\\\alpha *a_n 
\end{bmatrix}
$$

## II. Matrix

#### What is the matrix?

**Matrix** a [set](https://www.britannica.com/topic/set-mathematics-and-logic) of numbers arranged in rows and columns so as to form a rectangular [array](https://www.britannica.com/dictionary/array).
*Example of matrix*
$$
A =
\begin{bmatrix}
a_{11}&a_{12}&...&a_{1n}\\
a_{21}&a_{22}&...&a_{2n}\\
\vdots&\vdots&\ddots&\vdots\\
a_{m1}&a_{m2}&...&a_{mn}
\end{bmatrix} \in R^{m\times{}n}\\
\\
= concat(
\begin{bmatrix}
a_{11}\\a_{12}\\...\\a_{1n}
\end{bmatrix},
\begin{bmatrix}
a_{21}\\a_{22}\\...\\a_{2n}
\end{bmatrix},
...,
\begin{bmatrix}
a_{n1}\\a_{n2}\\...\\a_{mn}
\end{bmatrix})
$$

#### ***Matrix addition***

$$
A \in R^{m\times{}n},\quad B \in R^{m\times{}n}
\\
A+B=
\begin{bmatrix}
a_{11}+b_{11}&a_{12}+b_{21}&...&a_{1n}+b_{1n}\\
a_{21}+b_{21}&a_{22}+b_{22}&...&a_{2n}+b_{2n}\\
\vdots&\vdots&\ddots&\vdots\\
a_{m1}+b_{m1}&a_{m2}+b_{m2}&...&a_{mn}+b_{mn}
\end{bmatrix} \in R^{m\times{}n}
$$

#### ***Hadamard product***

$$
A \in R^{m*n},\quad B \in R^{m*n}
\\
A \bigotimes B=
\begin{bmatrix}
a_{11}b_{11}&a_{12}b_{21}&...&a_{1n}b_{1n}\\
a_{21}b_{21}&a_{22}b_{22}&...&a_{2n}b_{2n}\\
\vdots&\vdots&\ddots&\vdots\\
a_{m1}b_{m1}&a_{m2}b_{m2}&...&a_{mn}b_{mn}
\end{bmatrix} \in R^{m*n}
$$

#### ***Matrix multiplication***

$$
A \in R^{m\times{}n},\quad B \in R^{n\times{}k}, \quad C =AB, \quad C_{ij} = \sum^n_{k=1} a_{ik}b_{kj}
\\
\begin{bmatrix}
1&2\\2&0\\1&1
\end{bmatrix}
\begin{bmatrix}
2\\3
\end{bmatrix}
=\begin{bmatrix}
1\times{}2+2\times{}3\\2\times{}2+0\times{}3\\1\times{}2+1\times{}3
\end{bmatrix}
= \begin{bmatrix}
8\\4\\5
\end{bmatrix}
$$

*Different view*

![Matrix multiplication](./img'/multi.png 'Example')

​![matrix multi](./img'/multi_n.png)

*Example*
$$
\begin{bmatrix}
1&2\\2&0\\1&1
\end{bmatrix}
\begin{bmatrix}
2\\3
\end{bmatrix}
=2
\begin{bmatrix}
1\\2\\1
\end{bmatrix} + 3
\begin{bmatrix}
2\\0\\1
\end{bmatrix}
= \begin{bmatrix}
8\\4\\5
\end{bmatrix}
$$

#### ***Identity matrix***

Identity matrix is a square matrix, with the value:
$$
I_{ij} = 
\begin{cases}
1 &\quad \text{if } i=j \\
0 &\quad \text{if } i \neq j
\end{cases}
$$

$$
I_n=
\begin{bmatrix}
1&0&\cdots&0\\
0&1&\cdots&0\\
\cdots&\cdots&\cdots&\cdots\\
0&0&\cdots&1
\end{bmatrix} \in R^{n\times n}
$$

#### ***Matrix properties***

- $$
  \forall A \in R^{m\times n}, B \in R^{n\times p}, C \in R^{p\times q}: (AB)C = A(BC)
  $$

- $$
  \forall A, B \in R^{m\times n}, C, D \in R^{n\times p} \\
  $$

  $$
  \quad \quad \quad (A+B)C=AC + BC \\
  \quad \quad \quad A(C+D)=AC + AD
  $$

- $$
  \forall A \in R^{m \times n}: I_mA = AI_n =A, \text{note that }: I_m \neq I_n
  $$

#### ***Transpose***

$$
A \in R^{m\times n} \Rightarrow B = A^T \in R^{n \times m}, a_{ij} = b_{ji}
$$

$$
A =
\begin{bmatrix}
a_{11}&a_{12}&...&a_{1n}\\
a_{21}&a_{22}&...&a_{2n}\\
\vdots&\vdots&\ddots&\vdots\\
a_{m1}&a_{m2}&...&a_{mn}
\end{bmatrix}
\Rightarrow B =
\begin{bmatrix}
a_{11}&a_{21}&...&a_{m1}\\
a_{12}&a_{22}&...&a_{m2}\\
\vdots&\vdots&\ddots&\vdots\\
a_{1n}&a_{2n}&...&a_{mn}
\end{bmatrix}
$$

$$
\text{A matrix } A \in R^{m\times n} \text{is symmetric if } A^T = A
$$

#### ***Inverse***

Square matrix A and matrix B belong to the same n-dimensional space with the property that AB = BA = Identity matrix, then B is called the inverse matrix of A.

Not every matrix A has an inverse,if the inverse does exist, A is called regular/invertible/nonsingular matrix.


#### ***Liner equation***
$$
\begin{cases}
2x+y=1\\x-y=-1
\end{cases}
\Leftrightarrow
\begin{cases}
2x_1+x_2=1\\x_1-x_2=-1
\end{cases}
$$
$$
\Leftrightarrow
\begin{bmatrix}
2&1\\1&-1
\end{bmatrix}
\begin{bmatrix}
x_1\\x_2
\end{bmatrix}
=
\begin{bmatrix}
1\\-1
\end{bmatrix}
\Leftrightarrow
x_1 \begin{bmatrix}
2\\1
\end{bmatrix}
+ x_2 \begin{bmatrix}
1\\-1
\end{bmatrix}
=\begin{bmatrix}
1\\-1
\end{bmatrix}
$$
*General formula*
$$
\begin{cases}
a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n =b_1\\
a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n =b_2\\
 \cdots \\
a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n =b_m
\end{cases}
\Leftrightarrow Ax= B
$$
$$
\Leftrightarrow
=\begin{bmatrix}
a_{11}&a_{12}&...&a_{1n}\\
a_{21}&a_{22}&...&a_{2n}\\
\vdots&\vdots&\ddots&\vdots\\
a_{m1}&a_{m2}&...&a_{mn}
\end{bmatrix}
\begin{bmatrix}
x_1\\x_2\\ \vdots\\x_n
\end{bmatrix}
= \begin{bmatrix}
b_1\\b_2\\ \vdots \\ b_m
\end{bmatrix}
$$
*Example solving Linear Equations using Matrix Method* 

***Illustration***: Solve the following equations by matrix inversion
$$
\begin{cases}
x_1+8x_3-4x_4=42\\
x_2+2x_3+12x_4=8\\
\end{cases} \\
$$
***Solution***
$$
\begin{bmatrix}
1&0&8&-4\\0&1&2&12
\end{bmatrix}
\begin{bmatrix}
x_1\\x_2\\x_3\\x_4
\end{bmatrix}=
\begin{bmatrix}
42\\8
\end{bmatrix}
$$
$$
\Leftrightarrow
x_1 \begin{bmatrix}1\\0\end{bmatrix}
+ x_2 \begin{bmatrix}0\\1\end{bmatrix}
+ x_3 \begin{bmatrix}8\\2\end{bmatrix}
+ x_4 \begin{bmatrix}-4\\12\end{bmatrix}
= \begin{bmatrix}
42\\8
\end{bmatrix}
$$
$$
\Leftrightarrow \sum^4_{i=1} x_ic_i = b
$$
*with c is columns*

We can see that $x^*=[42,8,0,0]^T \begin{equation} (\Rightarrow Ax^*=b) \end{equation}$ is solution, it is called particular soluyion or special solution.

*So how do we find the remaining solutions of the equation?*

We have:
$$
c_3 = \begin{bmatrix} 8\\2 \end{bmatrix} = 8c_1 + 2c_2 \Rightarrow c_3-8c_1-2c_2 = 0
$$
$$
\Leftrightarrow 
\begin{bmatrix}
c_1&c_2&c_3&c_4
\end{bmatrix}
\begin{bmatrix}-8\\-2\\1\\0\end{bmatrix} = 0
\Leftrightarrow 
\begin{equation}
A \lambda_1 \begin{bmatrix}-8\\-2\\1\\0 \end{bmatrix}=0 , \lambda_1 \in R
\end{equation}
$$
Similar:
$$
\begin{equation}
A \lambda_2 \begin{bmatrix}4\\-12\\0\\1 \end{bmatrix}=0 , \lambda_2 \in R
\end{equation}
$$
From $(1), (2) \text{and } (3)$ we have:
$$
A(x^* +\lambda_1 \begin{bmatrix}8\\-2\\1\\0 \end{bmatrix} + \lambda_2 \begin{bmatrix}4\\-12\\0\\1\end{bmatrix}) =b, \lambda_1 \lambda_2 \in R
$$
Finally: $x=\begin{bmatrix}42\\8\\0\\0\end{bmatrix} + \lambda_1\begin{bmatrix}8\\-2\\1\\0\end{bmatrix} + \lambda_2 \begin{bmatrix}4\\-12\\0\\1\end{bmatrix}, \lambda_1 \lambda_2 \in R$

***How to solve system of equations:***

$\bullet$ Find a particular solution to $Ax=b$

$\bullet$ Find all solutions to $Ax=0$

$\bullet$ Combine the solutions from steps 1. and 2. to general solution

#### ***Row-Echelon Form***
A matrix is in row-echelon form if:

$\bullet$ All rows that contain only zeros are at the bottom of matrix

$\bullet$ Looking at nonzero rows only, the first nonzero number from the left
pivot (also called the pivot or the leading coefficient) is always
strictly to the leading coefficient right of the pivot of the row above
it.

*Remark*: The variables corresponding to the pivots in the row-echelon
form are called basic variables and the other basic variable variables are
free variables.

$$
\left\lceil
\begin{matrix} 1&-2&1&-1&1 
\\ 0&0&1&-1&3 
\\0&0&0&1&-2 
\\0&0&0&0&0 \end{matrix}
\right\rvert
\left\rvert
\begin{matrix} 0\\-2\\1\\ a+1 \end{matrix}
\right\rceil
$$

$x_1,x_3,x_4$ are basic variable, $x_2, x_5$ are free variables.

An equation system is in reduced reduced row-echelon form if:

$\bullet$ It is in row-echelon form.

$\bullet$ Every pivot is 1.

$\bullet$ The pivot is the only nonzero entry in its column.

Gaussian elimination is an algorithm that elimination performs elementary
transformations to bring a system of linear equations into reduced
row-echelon form.

#### ***Exercise***
***Ex1: Compute the following matrix products, if possible:***

*(a)* $A=\begin{bmatrix}1\\2\\3 \end{bmatrix} \begin{bmatrix}1&2&3 \end{bmatrix}$
$$
A = \begin{bmatrix}1\times1 & 2\times 2 & 3\times3 \end{bmatrix} = \begin{bmatrix} 1&4&9 \end{bmatrix}
$$
*(b)* $B=\begin{bmatrix}1&2&3 \end{bmatrix} \begin{bmatrix}1\\2\\3 \end{bmatrix}$
$$
B = [1\times1 + 2\times 2 + 3\times3] = 14 
$$
*(c)* $C=\begin{bmatrix}1&2\\4&5\\7&8 \end{bmatrix} \begin{bmatrix}1&1&0\\0&1&1\\1&0&1 \end{bmatrix}$

We cannot solve that calculation, because the number of elements in the row is not equal to the number of elements in the column

*(d)* $D=\begin{bmatrix}1&1&0\\0&1&1\\1&0&1 \end{bmatrix} \begin{bmatrix}1&2&3\\4&5&6\\7&8&9\end{bmatrix}$
$$
D  =  \begin{bmatrix} 5&7&9\\11&13&15 \\ 8&10&12 \end{bmatrix}
$$
*(e)* $E=\begin{bmatrix} 1&2&1&2\\4&1&-1&-4 \end{bmatrix} \begin{bmatrix} 0&3\\1&-1\\2&1\\5&2\end{bmatrix}$
$$
E = \begin{bmatrix} 14&6\\-21&2 \end{bmatrix}
$$

***Ex2: Using Gaussian elimination, find the set $S$ of all solutions in x of the
following inhomogeneous linear systems $Ax = b$ where $A$ and $b$ are
defined as follows:***

*(a)* $A=\begin{bmatrix} 1&1&-1\\0&2&1\\1&1&-4 \end{bmatrix} \begin{bmatrix}1\\1\\0 \end{bmatrix}$

We have:
$$
\left\lceil
\begin{matrix} 1&1&-1\\0&2&1\\1&1&-4 \end{matrix}
\right\rvert
\left\rvert
\begin{matrix} 1\\1\\0 \end{matrix}
\right\rceil = 
\left\lceil
\begin{matrix} 1&1&-1\\1&1&-4\\0&2&1 \end{matrix}
\right\rvert
\left\rvert
\begin{matrix} 1\\0\\0 \end{matrix}
\right\rceil =
\left\lceil
\begin{matrix} 1&1&-1\\0&0&3\\0&2&1 \end{matrix}
\right\rvert
\left\rvert
\begin{matrix} 1\\1\\1 \end{matrix}
\right\rceil
$$
$$
\Leftrightarrow
\begin{cases}
x+y-z=1\\3z=1\\2y+z=1
\end{cases}
\Leftrightarrow
\begin{cases}
x=1\\y=\frac{1}{3}\\z=\frac{1}{3}
\end{cases}
$$

*(b)* $B=\begin{bmatrix} 1&1&-1&-1\\2&5&-7&-5\\2&-1&1&3\\5&2&-4&2 \end{bmatrix} \begin{bmatrix}1\\-2\\4\\6 \end{bmatrix}$

We have:
$$
\left\lceil
\begin{matrix} 1&1&-1&-1\\2&5&-7&-5\\2&-1&1&3\\5&2&-4&2 \end{matrix}
\right\rvert
\left\rvert
\begin{matrix} 1\\-2\\4\\6 \end{matrix}
\right\rceil =
\left\lceil
\begin{matrix} 1&1&-1&-1\\0&-3&5&3\\0&-3&3&5\\0&-3&1&7 \end{matrix}
\right\rvert
\left\rvert
\begin{matrix} 1\\4\\2\\1 \end{matrix}
\right\rceil
$$

$$=
\left\lceil
\begin{matrix} 1&1&-1&-1\\0&-3&5&3\\0&0&2&-2\\0&0&4&4 \end{matrix}
\right\rvert
\left\rvert
\begin{matrix} 1\\4\\2\\3 \end{matrix}
\right\rceil =
\left\lceil
\begin{matrix} 1&1&-1&-1\\0&-3&5&3\\0&0&1&-1\\0&0&1&1 \end{matrix}
\right\rvert
\left\rvert
\begin{matrix} 1\\4\\1\\\frac{3}{4} \end{matrix}
\right\rceil = \left\lceil
\begin{matrix} 1&1&-1&-1\\0&-3&5&3\\0&0&1&-1\\0&0&0&-2 \end{matrix}
\right\rvert
\left\rvert
\begin{matrix} 1\\4\\1\\\frac{1}{4} \end{matrix}
\right\rceil
$$
$$
\Rightarrow
\begin{cases}
x+y+z+m =1 \\-3y+5z+3m=4\\z-m=1\\-2m=\frac{1}{4}
\end{cases}
\Rightarrow
\begin{cases}
x=\frac{3}{2} \\ y=\frac{5}{4}\\ z= \frac{7}{8}\\m=\frac{-1}{8}
\end{cases}
$$
*(c)* $C=\begin{bmatrix} 2&1&1\\-1&2&1 \end{bmatrix} \begin{bmatrix}3\\6 \end{bmatrix}$

*(d)* $C=\begin{bmatrix}2&1\\-1&2\\1&1 \end{bmatrix} \begin{bmatrix}3\\6\\-1 \end{bmatrix}$

***Ex3: Determine the inverses of the following matrices if possible:***

*(a)* $A=\begin{bmatrix} 2&0&0\\0&-1&0\\0&0&6 \end{bmatrix}$

We have: $AA^{-1} =I$
$$
\begin{bmatrix} 2&0&0\\0&-1&0\\0&0&6\end{bmatrix} \begin{bmatrix} a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{bmatrix} = \begin{bmatrix} 1&0&0\\0&1&0\\0&0&1 \end{bmatrix}
$$
$$
\Leftrightarrow
\begin{bmatrix} -2a_{11}&2a_{12}&2a_{13}\\-a_{21}&-a_{22}&-a_{23}\\6a_{31}&6a_{32}&6a_{33}\end{bmatrix} = \begin{bmatrix} 1&0&0\\0&1&0\\0&0&1 \end{bmatrix}
$$
$$
\Leftrightarrow
A^{-1} = \begin{bmatrix} \frac{1}{2}&0&0\\0&-1&0\\0&0&\frac{1}{6} \end{bmatrix}
$$
*(b)* $B=\begin{bmatrix} 4&1\\3&1 \end{bmatrix}$
We have: $BB^{-1} =I$
$$
\begin{bmatrix} 4&1\\3&1 \end{bmatrix} \begin{bmatrix} a_{11}&a_{12}\\a_{21}&a_{22} \end{bmatrix} =  \begin{bmatrix} 1&0\\0&1\end{bmatrix}
$$
$$
\Leftrightarrow
\begin{bmatrix} 4a_{11} + a_{21}&4a_{12}+a_{22}\\3a_{11}+a_{21}&3a_{12}+a_{22} \end{bmatrix} = \begin{bmatrix} 1&0\\0&1\end{bmatrix}
$$
$$
\Rightarrow B^{-1} =
\begin{bmatrix}
1&-1\\-3&4
\end{bmatrix}
$$